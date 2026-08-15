'use client'
import Hero from "@/src/components/home/Hero"
import BottomMarquee from "../components/home/BottomMarquee";
import TutorGettingStarted from "../components/home/TutorStart";
import BookingGuide from "../components/home/BookingGuide";
import ReviewGettingStarted from "../components/home/ReviewGettingStarted";
import BeATutor from "../components/home/BeATutor";
import LearnerReviews from "../components/home/LearnerReview";
import WhySkillBridge from "../components/home/WhySkillBridge";
export default function Home() {
  return (
<div>
<div  className="w-8/12 mx-auto">
  <Hero />
  <BottomMarquee />
</div>
  <BookingGuide />
  <LearnerReviews />
  <ReviewGettingStarted />
  <BeATutor />
  <TutorGettingStarted />
  <WhySkillBridge />
</div>
  );
}
