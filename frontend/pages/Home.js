import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import NewsletterSection from "../components/NewsLetterSection";
import Footer from "../components/Footer";
import CallToActionSection from "../components/CallToActionSection";

export default function HeroImage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CallToActionSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
