'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Zap, Layers, Network, TerminalSquare, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const problems = [
  { text: 'Juggling 10 different tools', icon: AlertTriangle },
  { text: 'Context‑switching kills flow', icon: AlertTriangle },
  { text: 'AI doesn’t understand your codebase', icon: AlertTriangle },
  { text: 'Manual reviews and debugging', icon: AlertTriangle },
  { text: 'Deployment pipelines are fragile', icon: AlertTriangle },
];

const solutions = [
  { text: 'One unified workspace', icon: Layers },
  { text: 'Deep codebase intelligence', icon: Network },
  { text: 'AI that knows every file', icon: Zap },
  { text: 'Automated reviews & tests', icon: TerminalSquare },
  { text: 'One‑click safe deployments', icon: ArrowRight },
];

export default function Problems() {
  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#6C5CE7]/5 blur-[200px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex"
          >
            <Badge
              variant="outline"
              className="flex items-center gap-2 px-4 py-2 rounded-full border-white/[0.08] bg-white/[0.03] text-[#A1A1AA]"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-[#6C5CE7]" />
              The Problem
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Too many tools.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C5CE7] to-[#A78BFA]">
              Too much noise.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-base text-[#A1A1AA] max-w-xl mx-auto"
          >
            Developers spend more time fighting tools than writing code.
          </motion.p>
        </div>

        {/* Split visual: Before → After */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-start relative">
          {/* Left: Problems (dark, subdued) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative lg:pr-10"
          >
            <div className="p-6 rounded-2xl border border-white/[0.05] bg-[#0A0A0A]/80 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60 inline-block" />
                Without Nexus
              </h3>
              <ul className="space-y-5">
                {problems.map((item, i) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 text-[#A1A1AA]"
                  >
                    <item.icon className="w-4 h-4 text-red-500/70 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Solutions (bright, glowing) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative lg:pl-10"
          >
            <div className="p-6 rounded-2xl border border-[#6C5CE7]/20 bg-white/[0.03] backdrop-blur-md shadow-[0_0_30px_rgba(108,92,231,0.1)] relative overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6C5CE7]/5 to-transparent pointer-events-none" />
              <h3 className="text-sm font-semibold text-[#A78BFA] uppercase tracking-wider mb-6 flex items-center gap-2 relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] animate-pulse" />
                With Nexus
              </h3>
              <ul className="space-y-5 relative z-10">
                {solutions.map((item, i) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 text-[#A1A1AA] group"
                  >
                    <div className="w-5 h-5 rounded-md bg-[#6C5CE7]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#6C5CE7]/20 transition-colors">
                      <item.icon className="w-3.5 h-3.5 text-[#A78BFA]" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              {/* Decorative Nexus N in background */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 text-[#6C5CE7]/5 flex items-center justify-center pointer-events-none select-none">
                <span className="text-8xl font-bold">N</span>
              </div>
            </div>
          </motion.div>

          {/* Connecting arrow for desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              className="w-12 h-12 rounded-full bg-[#6C5CE7]/10 border border-[#6C5CE7]/30 flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(108,92,231,0.3)]"
            >
              <ArrowRight className="w-5 h-5 text-[#A78BFA]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}