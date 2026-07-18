import Image from "next/image";
import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/Hero";
import Integrations from "@/components/marketing/Integrations";
import Workflow from "@/components/marketing/Workflow";
import Features from "@/components/marketing/Features";
import ScaleSection from "@/components/marketing/ScaleSection";
import Testimonials from "@/components/marketing/Testimonials";
import CTA from "@/components/marketing/CTA";
import Footer from "@/components/marketing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Integrations/>
      <Workflow/>
      <Features/>
      <ScaleSection/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  );
}
