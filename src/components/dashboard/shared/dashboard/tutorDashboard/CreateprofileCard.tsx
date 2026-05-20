import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/src/context/AuthContext";
import { getAllCategories } from "@/src/services/authService";
import { useEffect, useState } from "react";

export default function CreateprofileCard() {
  const { user, editTutorMOdal, setEditTutorModal } = useAuth();

  // tutor profile
  const tutorProfile = user?.tutorProfile;

  // Profile Section
  const [name, setName] = useState(null);
  const email = user?.email; // email cant be updated its for readonly

  // Professional Information
  const [bio, setBio] = useState(null);
  const [hourlyRate, setHourlyRate] = useState(null);

  // Categories (Which categroy subject)
const [categories, setCategories] = useState<string[]>([]);
const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getAllCategories();
      setCategories(data?.data);
    }
    load();
  },[])

const handleCategoryToggle = (id: string) => {
  setSelectedCategories((prev) => {
    if (prev.includes(id)) {
      return prev.filter((item) => item !== id);
    }
    return [...prev, id];
  });
};

  // CLoudinary pohot upload
  const [file, setFile] = useState(null);
  const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imageUrl = tutorProfile?.profileImage || "";

      // Upload image to cloudinary if file exists
      if (file) {
        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", uploadPreset as string);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();

        imageUrl = data.secure_url;
      }

      const tutorData = {
        name,
        bio,
        hourlyRate: Number(hourlyRate),
        category,
        profileImage: imageUrl,
      };

      console.log(tutorData);

      // await createTutorProfile(tutorData)

      setEditTutorModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleIImageUpload = async(Files);

  return (
    <div>
      <Dialog open={editTutorMOdal} onOpenChange={setEditTutorModal}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {tutorProfile ? "Update Tutor Profile" : "Create Tutor Profile"}
            </DialogTitle>

            <DialogDescription>
              Complete your professional tutor information for SkillBridge.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            {/* Name */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-black
              "
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium block mb-2">Email</label>

              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                bg-gray-100
                cursor-not-allowed
              "
              />
            </div>

            {/* Bio */}
            <div>
              <label className="text-sm font-medium block mb-2">Bio</label>

              <textarea
                placeholder="Tell students about yourself..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-black
              "
              />
            </div>

            {/* Hourly Rate */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Hourly Rate ($)
              </label>

              <input
                type="number"
                placeholder="20"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                outline-none
                focus:ring-2
                focus:ring-black
              "
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-sm font-medium block mb-2">Category</label>

  <label className="text-sm font-medium block mb-3">
    Categories
  </label>

<div className="flex flex-wrap gap-3">
  {categories.map((cat) => (
    <button
      key={cat.id}
      type="button"
      onClick={() => handleCategoryToggle(cat.id)}
      className={`px-4 py-2 rounded-full border ${
        selectedCategories.includes(cat.id)
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      {cat.name}
    </button>
  ))}
</div>
</div>

            {/* Submit Button */}
            <button
              type="submit"
              className="
              w-full
              bg-black
              text-white
              py-3
              rounded-xl
              font-medium
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-gray-900
            "
            >
              {tutorProfile ? "Update Profile" : "Create Profile"}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
