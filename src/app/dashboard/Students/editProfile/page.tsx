'use client'

import ProfileCard from "@/src/components/dashboard/shared/dashboard/tutorDashboard/CreateprofileCard";
import { useAuth } from "@/src/context/AuthContext"

export default function EditProfile() {
    const {user} = useAuth();
    return (
        <div>
            <h1>This is user edit profile route</h1>
            <ProfileCard />
        </div>
    )
}