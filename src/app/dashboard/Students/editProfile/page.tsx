'use client'

import EditProfileForm from "@/src/components/dashboard/student/editprofile/EditProfileForm ";
import { useAuth } from "@/src/context/AuthContext"

export default function EditProfile() {
    const {user} = useAuth();
    return (
    <div className="p-6">
      <EditProfileForm />
    </div>
    )
}