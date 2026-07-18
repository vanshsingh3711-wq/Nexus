'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, ShieldCheck, CheckCircle2, Code2, Lock } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#030303]">
      {/* Subtle background grid (optional premium touch) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none opacity-20" />

      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start text-left z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Badge
              variant="outline"
              className="flex items-center gap-2 px-4 py-2 rounded-full border-white/[0.08] bg-white/[0.03] text-[#A1A1AA] hover:bg-white/[0.05] transition-colors"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6C5CE7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6C5CE7]" />
              </span>
              The AI Operating System for Developers
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6"
          >
            The AI Operating
            <br />
            System{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#A78BFA]">
              for Developers.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#A1A1AA] mb-10 max-w-xl leading-relaxed"
          >
            Nexus understands your entire codebase, connects your tools, and helps
            you plan, build, debug, test, review, and ship software — all from one
            intelligent workspace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <Link
              href="/get-started"
              className={buttonVariants({
                className:
                  'inline-flex items-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6] hover:from-[#7C6DF0] hover:to-[#9B6CF9] text-white font-semibold shadow-[0_0_30px_rgba(108,92,231,0.5)] hover:shadow-[0_0_40px_rgba(108,92,231,0.7)] transition-all duration-300 rounded-lg px-7 py-4 h-auto text-base',
              })}
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#demo"
              className={buttonVariants({
                variant: 'outline',
                className:
                  'inline-flex items-center gap-2 border-white/[0.1] bg-transparent hover:bg-white/[0.05] text-white font-semibold rounded-lg px-7 py-4 h-auto text-base',
              })}
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#A1A1AA] font-medium"
          >
            {[
              { icon: CheckCircle2, text: 'No credit card' },
              { icon: Code2, text: 'Open source (AGPLv3)' },
              { icon: ShieldCheck, text: 'Self-hosted' },
              { icon: Lock, text: 'Privacy first' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-[#6C5CE7]" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[650px] flex items-center justify-center"
        >
          {/* Glow orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#6C5CE7]/20 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#A78BFA]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Glass card with mock UI */}
          <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-2xl border border-white/[0.08] bg-[#0A0A0E]/60 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
            {/* Subtle inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />

            {/* Mock UI: Code editor preview + graph lines */}
            <div className="p-6 h-full flex flex-col justify-between">
              {/* Fake window controls */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>

              {/* Fake code lines */}
              <div className="space-y-3 flex-1">
                <div className="h-3 bg-white/[0.06] rounded w-3/4" />
                <div className="h-3 bg-white/[0.04] rounded w-1/2" />
                <div className="h-3 bg-white/[0.06] rounded w-5/6" />
                <div className="h-3 bg-white/[0.03] rounded w-2/3" />
                <div className="h-3 bg-gradient-to-r from-[#6C5CE7]/30 via-[#6C5CE7]/10 to-transparent rounded w-1/2" />
                <div className="h-3 bg-white/[0.05] rounded w-4/5" />
                <div className="h-3 bg-white/[0.03] rounded w-1/3" />
              </div>

              {/* Fake mini graph */}
              <div className="mt-6 flex items-end gap-1 h-16">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-full bg-gradient-to-t from-[#6C5CE7]/40 to-[#A78BFA]/30 rounded-sm"
                    style={{ height: `${Math.random() * 100}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Placeholder overlay for real screenshot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-[#A1A1AA]/30 text-sm font-mono">
                {/* ACTION REQUIRED: Replace with <Image src="/hero-dashboard.png" ... /> */}
                hero-dashboard.png
              </p>
            </div>
          </div>

          {/* Floating accent ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-2xl border border-[#6C5CE7]/10 pointer-events-none"
            style={{ width: 'calc(100% + 2rem)', height: 'calc(100% + 2rem)', top: '-1rem', left: '-1rem' }}
          />
        </motion.div>
      </div>
    </section>
  );
}