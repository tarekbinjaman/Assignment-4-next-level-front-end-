'use client'
import CreateprofileCard from "@/src/components/dashboard/shared/dashboard/tutorDashboard/CreateprofileCard";
import TutorWelcomeCard from "@/src/components/dashboard/shared/dashboard/tutorDashboard/tutorwelcomecard";
import { useAuth } from "@/src/context/AuthContext"

export default function EditProfile() {
    const {user} = useAuth();
    const isTutorWithoutProfile = user?.role === "TUTOR" && !user?.tutorProfile;
    // console.log("THis is user from tutor edit profile route",  user)
    return (

        <div>
        {/* {isTutorWithoutProfile && <TutorWelcomeCard />} */}
        <TutorWelcomeCard />
        <CreateprofileCard />
        </div>
    )
}