"use client";
import { useState } from "react";
import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import PricingSection from "@/sections/PricingSection";
import SubscriptionFormSection from "@/sections/SubscriptionFormSection";
import SurveySection from "@/sections/SurveySection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  const [showSurvey, setShowSurvey] = useState(false);
  const [subscriber, setSubscriber] = useState<{
    name: string;
    phone: string;
    email: string;
  } | null>(null);

  function handleSubscribe() {
    document
      .getElementById("subscription-form")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleFormSubmit(data: {
    name: string;
    phone: string;
    email: string;
  }) {
    setSubscriber(data);
    setShowSurvey(true);
  }

  async function handleSurveySubmit(surveyAnswers: any) {
    if (!subscriber) return;
    const payload = { ...surveyAnswers, phone: subscriber.phone };
    await fetch("/api/survey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  return (
    <div className="font-open-sans bg-background text-foreground min-h-screen flex flex-col">
      <HeroSection onSubscribe={handleSubscribe} />
      <FeaturesSection />
      <PricingSection onSubscribe={handleSubscribe} />
      <div id="subscription-form">
        {!showSurvey ? (
          <SubscriptionFormSection onSubmit={handleFormSubmit} />
        ) : (
          <SurveySection
            phone={subscriber?.phone ?? ""}
            onSubmit={handleSurveySubmit}
          />
        )}
      </div>
      <FooterSection />
    </div>
  );
}
