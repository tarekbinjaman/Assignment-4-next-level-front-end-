"use client";

import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type BookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tutorId: string;
  tutorName: string;
};

type BookingFormData = {
  bookingDate: string;
  notes: string;
};

export default function BookingModal({
  open,
  onOpenChange,
  tutorId,
  tutorName,
}: BookingModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    console.log({
      tutorId,
      ...data,
    });

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 mt-4"
        >
          {/* Tutor */}
          <div className="space-y-2">
            <Label>Tutor</Label>
            <Input value={tutorName} disabled />
          </div>

          {/* Booking Date */}
          <div className="space-y-2">
            <Label>Booking Date</Label>

            <Input
              type="date"
              min={today}
              {...register("bookingDate", {
                required: "Booking date is required",
              })}
            />

            {errors.bookingDate && (
              <p className="text-sm text-red-500">
                {errors.bookingDate.message}
              </p>
            )}
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

            <Button type="submit">
              Book Session
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}