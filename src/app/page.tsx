"use client";

import Hero from "@/src/components/home/Hero";
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
      {/* Hero */}
      <section id="home" className="scroll-mt-24">
        <div className="mx-auto 2xl:w-8/12 xl:w-11/12">
          <Hero />
          <BottomMarquee />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24">
        <BookingGuide />
      </section>

      {/* Learner reviews */}
      <section id="reviews" className="scroll-mt-24">
        <LearnerReviews />
      </section>

      {/* How reviews work */}
      <section id="review-guide" className="scroll-mt-24">
        <ReviewGettingStarted />
      </section>

      {/* Become a tutor */}
      <section id="for-tutors" className="scroll-mt-24">
        <BeATutor />
      </section>

      {/* Tutor getting started */}
      <section id="tutor-guide" className="scroll-mt-24">
        <TutorGettingStarted />
      </section>

      {/* Why SkillBridge */}
      <section id="why-skillbridge" className="scroll-mt-24">
        <WhySkillBridge />
      </section>
    </div>
  );
}