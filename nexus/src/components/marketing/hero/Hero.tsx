// src/components/marketing/hero/Hero.tsx
'use client';

import React from 'react';
import HeroBadge from './HeroBadge';
import HeroContent from './HeroContent';
import HeroButtons from './HeroButtons';
import TrustItems from './TrustItems';
import HeroDashboard from './HeroDashboard';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none opacity-20" />

      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <div className="flex flex-col items-start text-left z-10">
          <HeroBadge />
          <HeroContent />
          <HeroButtons />
          <TrustItems />
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}