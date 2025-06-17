// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import { VStack } from "@chakra-ui/react";
import Navigation from "@app/components/navigation";
import HeroSection from "./hero";
import AboutSection from "./about";
import FeatureSection from "./feature";
import GetStarted from "./get-started";
import ContactSection from "./contact-us";
import LargeWithNewsletter from "./footer";

export default function LandingPage() {
  return (
    <>
      <VStack w={"full"} position={"relative"} overflow={"hidden"} p={0}>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        <GetStarted />
        <ContactSection />
        <LargeWithNewsletter />
      </VStack>
    </>
  );
}
