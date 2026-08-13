'use client'
import Hero from "@/src/components/home/Hero"
import BottomMarquee from "../components/home/BottomMarquee";
import TutorGettingStarted from "../components/home/TutorStart";
export default function Home() {
  return (
<div className="w-8/12 mx-auto">
  <Hero />
  <BottomMarquee />
  <TutorGettingStarted />
</div>
  );
}
