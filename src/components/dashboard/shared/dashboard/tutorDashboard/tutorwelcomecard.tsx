import { useAuth } from "@/src/context/AuthContext";

export default function TutorWelcomeCard() {
  const {editTutorMOdal, setEditTutorModal} = useAuth();
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border p-10 text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-4xl">
        🎓
      </div>

      <h2 className="text-3xl font-bold mt-6">Become a Tutor</h2>

      <p className="text-gray-500 mt-3 leading-relaxed">
        Complete your tutor profile to start teaching, connect with students,
        and grow your career on SkillBridge.
      </p>

      <button
      onClick={()=> setEditTutorModal(true)}
        className="
    mt-8
    bg-black
    text-white
    px-6
    py-3
    rounded-xl
    font-medium
    transition-all
    duration-300
    hover:scale-105
    hover:bg-gray-900
    active:scale-95
    shadow-md
    hover:shadow-xl
  "
      >
        Create Tutor Profile
      </button>
    </div>
  );
}
