import { useAuth } from "@/src/context/AuthContext";
import { useState } from "react";

export default function CreateprofileCard() {

    const {user} = useAuth();

    // Profile Section
    const [name, setName] = useState(null); 
    const email = user?.email;  // email cant be updated its for readonly

    // Professional Information 
    const [bio, setBio] = useState(null);
    const [hourlyRate, setHourlyRate] = useState(null);

    // Categories (Which categroy subject)
    const [category, setCategory] = useState(null);

    // CLoudinary pohot upload
    const [file, setFile] = useState(null);
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;


    const handleIImageUpload = async (Files)




      const [modal, setModal] = useState(false);

    return (
        <div>
            <h1>This is Edit profile</h1>
        </div>
    )
}