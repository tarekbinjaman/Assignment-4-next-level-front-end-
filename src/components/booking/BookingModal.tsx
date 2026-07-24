"use client";

// ========================= Imports =========================
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useAvailableSlots } from "@/src/hooks/booking/useAvailableSlots";
import { useSingleTutor } from "@/src/hooks/tutor/useSingleTutor";
import { createBooking } from "@/src/services/bookingService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// ========================= Types =========================

type BookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tutorId: string;
  tutorName: string;
  availability: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
  hourlyRate: number;
};

type BookingFormData = {
  bookingDate: string;
  notes: string;
  startTime: string;
  endTime: string;
  duration: number;
};

type TimeSlot = {
  startTime: string;
  endTime: string;
};

// ========================= Component =========================

export default function BookingModal({
  open,
  onOpenChange,
  tutorId,
  tutorName,
  availability,
}: BookingModalProps) {
  // ========================= React Hook Form =========================

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>();

  const selectedDate = useWatch({
    control,
    name: "bookingDate",
  });

  // ========================= API Hooks =========================

  const { data: tutor } = useSingleTutor(tutorId);


  const { data: availableSlots, isLoading } = useAvailableSlots(
    tutorId,
    selectedDate,
  );

  // ========================= Local State =========================

  const [selectedCalendarDate, setSelectedCalendarDate] = useState<Date>();

  const [selectedDuration, setSelectedDuration] = useState(60);

  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);

  // ========================= Derived Values =========================

  const hourlyRate = Number(tutor?.data?.hourlyRate);

  const availableDays = availability.map((item) => item.day);

  const durationOptions = [30, 60];

  const dayMap: Record<number, string> = {
    0: "SUNDAY",
    1: "MONDAY",
    2: "TUESDAY",
    3: "WEDNESDAY",
    4: "THURSDAY",
    5: "FRIDAY",
    6: "SATURDAY",
  };

  // ========================= Effects =========================

  useEffect(() => {
    register("startTime", {
      required: "Please select a time",
    });

    register("endTime");
  }, [register]);

  // ========================= Helper Values =========================

  const timeSlots =
    availableSlots?.data?.flatMap((slot: TimeSlot) => {
      const slots = [];

      let currentHour = Number(slot.startTime.split(":")[0]);
      const endHour = Number(slot.endTime.split(":")[0]);

      while (currentHour < endHour) {
        slots.push({
          startTime: `${String(currentHour).padStart(2, "0")}:00`,
          endTime: `${String(currentHour + 1).padStart(2, "0")}:00`,
        });

        currentHour++;
      }

      return slots;
    }) || [];
    
    // ===============Router========================
const router = useRouter();
  // ========================= Handlers =========================

  const onSubmit = async (data: BookingFormData) => {
    try {
      const bookingData = {
        tutorId,
        date: data.bookingDate,
        startTime: data.startTime,
        endTime: data.endTime,
        duration: selectedDuration,
        notes: data.notes,
      };

      console.log(bookingData);

      // await createBooking(bookingData); // we'll connect this later
      const res = await createBooking(bookingData);

      console.log(res);
      reset();
      onOpenChange(false);
      router.push("/dashboard/Students/mybooking")
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to create booking");
    }
  };

  // ========================= UI =========================

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Book a Session</DialogTitle>
          <DialogDescription>
            Schedule a learning session with your tutor.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-5">
          {/* ================= Tutor ================= */}

          <div className="space-y-2">
            <Label>Tutor</Label>
            <Input value={tutorName} disabled />
          </div>

          {/* ================= Booking Date ================= */}

          <div className="space-y-2">
            <Label>Booking Date</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />

                  {selectedCalendarDate
                    ? selectedCalendarDate.toLocaleDateString()
                    : "Select a booking date"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedCalendarDate}
                  onSelect={(date) => {
                    if (!date) return;

                    setSelectedCalendarDate(date);

                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, "0");
                    const day = String(date.getDate()).padStart(2, "0");

                    setValue("bookingDate", `${year}-${month}-${day}`, {
                      shouldValidate: true,
                    });
                  }}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    const dayName = dayMap[date.getDay()];

                    return date < today || !availableDays.includes(dayName);
                  }}
                />
              </PopoverContent>
            </Popover>

            {errors.bookingDate && (
              <p className="text-sm text-red-500">
                {errors.bookingDate.message}
              </p>
            )}
          </div>

          {/* ================= Select Time ================= */}
          {selectedDate && (
            <div className="space-y-3">
              <Label>Select Time</Label>

              {isLoading ? (
                <p className="text-sm text-muted-foreground">
                  Loading available slots...
                </p>
              ) : timeSlots.length > 0 ? (
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((slot: any) => {
                    const isSelected =
                      selectedTime?.startTime === slot.startTime;
                    const formatTime = (time: string) => {
                      const [hour, minute] = time.split(":").map(Number);

                      const date = new Date();
                      date.setHours(hour, minute);

                      return date.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      });
                    };

                    return (
                      <Button
                        key={`${slot.startTime}-${slot.endTime}`}
                        type="button"
                        variant={isSelected ? "default" : "outline"}
                        className="w-full"
                        onClick={() => {
                          setSelectedTime(slot);

                          setValue("startTime", slot.startTime);
                          setValue("endTime", slot.endTime, {
                            shouldValidate: true,
                          });
                        }}
                      >
                        {formatTime(slot.startTime)}
                      </Button>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No available time slots for this day.
                </p>
              )}

              {errors.startTime && (
                <p className="text-sm text-red-500">
                  {errors.startTime.message}
                </p>
              )}
            </div>
          )}

          {/* ================= Duration ================= */}

          <div className="space-y-3">
            <Label>Duration</Label>

            <div className="flex flex-wrap gap-2">
              {durationOptions.map((duration) => (
                <Button
                  key={duration}
                  type="button"
                  variant={
                    selectedDuration === duration ? "default" : "outline"
                  }
                  onClick={() => setSelectedDuration(duration)}
                >
                  {duration} min
                </Button>
              ))}
            </div>
          </div>

          {/* ================= Booking Summary ================= */}

          <div className="space-y-3 rounded-lg border p-4">
            <div className="flex justify-between">
              <span>Session Duration</span>
              <span>{selectedDuration} minutes</span>
            </div>

            <div className="flex justify-between">
              <span>Rate</span>
              <span>${hourlyRate}/hour</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold">
              <span>Total Price</span>

              <span>${((hourlyRate / 60) * selectedDuration).toFixed(2)}</span>
            </div>
          </div>

          {/* ================= Notes ================= */}

          <div className="space-y-2">
            <Label>Notes (Optional)</Label>

            <Textarea
              rows={4}
              placeholder="Tell your tutor anything important before the session..."
              {...register("notes")}
            />
          </div>

          {/* ================= Actions ================= */}

          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                reset();
                onOpenChange(false);
              }}
            >
              Cancel
            </Button>

            <Button type="submit">Book Session</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
