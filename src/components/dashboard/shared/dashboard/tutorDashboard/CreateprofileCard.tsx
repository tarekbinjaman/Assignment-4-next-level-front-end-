import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/src/context/AuthContext";
import { useState } from "react";

export default function CreateprofileCard() {
  const { user, editTutorMOdal, setEditTutorModal } = useAuth();

  // Profile Section
  const [name, setName] = useState(null);
  const email = user?.email; // email cant be updated its for readonly

  // Professional Information
  const [bio, setBio] = useState(null);
  const [hourlyRate, setHourlyRate] = useState(null);

  // Categories (Which categroy subject)
  const [category, setCategory] = useState(null);

  // CLoudinary pohot upload
  const [file, setFile] = useState(null);
  const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  // const handleIImageUpload = async(Files);

  const [modal, setModal] = useState(false);

  return (
    <div>
      <Dialog
      open={editTutorMOdal}
      onOpenChange={setEditTutorModal}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
