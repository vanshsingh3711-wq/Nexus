'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GitBranch,
  Scan,
  LayoutGrid,
  Code2,
  Bug,
  MessageSquare,
  CloudUpload,
  Activity,
  Diamond,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const steps = [
  { id: '1', title: 'Connect', desc: 'Import from Git in seconds', icon: GitBranch },
  { id: '2', title: 'Understand', desc: 'AI maps your entire codebase', icon: Scan },
  { id: '3', title: 'Plan', desc: 'Break ideas into tasks', icon: LayoutGrid },
  { id: '4', title: 'Build', desc: 'Code with full context', icon: Code2 },
  { id: '5', title: 'Test', desc: 'Find bugs before you do', icon: Bug },
  { id: '6', title: 'Review', desc: 'Smarter PRs, better code', icon: MessageSquare },
  { id: '7', title: 'Deploy', desc: 'Ship to production safely', icon: CloudUpload },
  { id: '8', title: 'Monitor', desc: 'Observe and improve', icon: Activity },
];

export default function Workflow() {
  return (
    <section className="relative py-32 bg-[#030303] overflow-hidden">
      {/* Background glow — subtle, matching the Hero’s aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#6C5CE7]/10 blur-[180px] rounded-full" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#A78BFA]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header — consistent with Hero badge and typography */}
        <div className="text-center mb-24">
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
              <Diamond className="w-3.5 h-3.5 text-[#6C5CE7] fill-[#6C5CE7]/20" />
              Built for how you work
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            One intelligent system.
            <br />
            End to end.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#A1A1AA] max-w-2xl mx-auto"
          >
            Nexus connects every stage of your development lifecycle with AI
            intelligence — from idea to production.
          </motion.p>
        </div>

        {/* Desktop pipeline (≥lg) — no layout shift */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[calc(6.25%+20px)] right-[calc(6.25%+20px)] h-px bg-gradient-to-r from-[#6C5CE7]/20 via-[#6C5CE7]/10 to-[#6C5CE7]/20" />

          <div className="grid grid-cols-8 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col items-center text-center group relative h-44"
              >
                {/* Glassmorphism icon box */}
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] group-hover:border-[#6C5CE7]/40 group-hover:shadow-[0_0_24px_rgba(108,92,231,0.2)] transition-all duration-300">
                  <step.icon className="w-7 h-7 text-[#A1A1AA] group-hover:text-[#A78BFA] transition-colors duration-300" />
                </div>

                <span className="mt-4 text-xs font-mono text-[#A1A1AA] group-hover:text-white transition-colors relative z-10">
                  {step.id}
                </span>
                <h3 className="mt-1 text-sm font-semibold text-white relative z-10">
                  {step.title}
                </h3>

                {/* Hover description — absolutely positioned to prevent layout shift */}
                <div className="absolute top-full left-0 right-0 pt-2 px-1 overflow-hidden max-h-0 group-hover:max-h-16 transition-all duration-300 ease-in-out">
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet vertical timeline (<lg) */}
        <div className="lg:hidden max-w-md mx-auto relative">
          {/* Vertical gradient line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#6C5CE7]/20 via-[#6C5CE7]/10 to-transparent" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-6 group"
              >
                {/* Glassmorphism icon box (same style) */}
                <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] group-hover:border-[#6C5CE7]/40 group-hover:shadow-[0_0_24px_rgba(108,92,231,0.2)] transition-all duration-300 flex-shrink-0">
                  <step.icon className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#A78BFA] transition-colors duration-300" />
                </div>

                <div className="flex-1 pt-1">
                  <span className="text-xs font-mono text-[#A1A1AA]">{step.id}</span>
                  <h3 className="text-lg font-semibold text-white mt-1">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#A1A1AA] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}