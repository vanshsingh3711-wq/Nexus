import Image from "next/image";
import Navbar from "@/components/marketing/navbar/Navbar";
import Hero from "@/components/marketing/hero/Hero";
import Integrations from "@/components/marketing/integrations/Integrations";
import Workflow from "@/components/marketing/workflow/Workflow";
import Features from "@/components/marketing/features/Features";
import ScaleSection from "@/components/marketing/scaleselection/ScaleSection";
import Testimonials from "@/components/marketing/testimonials/Testimonials";
import CTA from "@/components/marketing/cta/CTA";
import Footer from "@/components/marketing/footer/Footer";
import Problems from "@/components/marketing/problems/Problems";

export default function Home() {
  return (
    <>
    
      <Navbar />
      <Hero/>
      <Integrations/>
      <Workflow/>
      <Features/>
      <Problems/>
      <ScaleSection/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  );
}
