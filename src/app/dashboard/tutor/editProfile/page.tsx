'use client'
import CreateprofileCard from "@/src/components/dashboard/shared/dashboard/tutorDashboard/tutorProfile/CreateprofileCard";
import TutorProfileCard from "@/src/components/dashboard/shared/dashboard/tutorDashboard/tutorProfile/TutorProfileCard";
import TutorWelcomeCard from "@/src/components/dashboard/shared/dashboard/tutorDashboard/tutorProfile/tutorwelcomecard";
import { useAuth } from "@/src/context/AuthContext"

export default function EditProfile() {
    const {user} = useAuth();
    const isTutorWithoutProfile = user?.role === "TUTOR" && !user?.tutorProfile;
    // console.log("THis is user from tutor edit profile route",  user)
    return (

    <div className="space-y-6">
      {isTutorWithoutProfile ? (
        <TutorWelcomeCard />
      ) : (
        <TutorProfileCard />
      )}

      <CreateprofileCard />
    </div>
    )
}