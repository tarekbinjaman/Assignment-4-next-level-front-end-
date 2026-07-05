"use client";
import { Calendar } from "@/components/ui/calendar";
import { useForm, useWatch } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
import { useState } from "react";
import { CalendarIcon } from "lucide-react";

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
};

type BookingFormData = {
  bookingDate: string;
  notes: string;
  startTime: string;
  endTime: string;
};

export default function BookingModal({
  open,
  onOpenChange,
  tutorId,
  tutorName,
  availability,
}: BookingModalProps) {
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

const { data: availableSlots, isLoading } = useAvailableSlots(
  tutorId,
  selectedDate
);

  const availableDays = availability.map((item) => item.day);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState<Date>();
  const dayMap: Record<number, string> = {
    0: "SUNDAY",
    1: "MONDAY",
    2: "TUESDAY",
    3: "WEDNESDAY",
    4: "THURSDAY",
    5: "FRIDAY",
    6: "SATURDAY",
  };

  const onSubmit = (data: BookingFormData) => {
    console.log({
      tutorId,
      ...data,
    });

    console.log("Date time from backend", availableSlots);

    // We'll replace this with the mutation later.

    reset();
    onOpenChange(false);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Book a Session</DialogTitle>
          <DialogDescription>
            Schedule a learning session with your tutor.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
          {/* Tutor */}
          <div className="space-y-2">
            <Label>Tutor</Label>
            <Input value={tutorName} disabled />
          </div>

          {/* Booking Date */}
          <div className="space-y-2">
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

          setValue(
            "bookingDate",
            date.toISOString().split("T")[0],
            {
              shouldValidate: true,
            }
          );
        }}
        disabled={(date) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          const dayName = dayMap[date.getDay()];

          return (
            date < today ||
            !availableDays.includes(dayName)
          );
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
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label>Notes (Optional)</Label>

            <Textarea
              rows={4}
              placeholder="Tell your tutor anything important before the session..."
              {...register("notes")}
            />
          </div>

          {/* Actions */}
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
