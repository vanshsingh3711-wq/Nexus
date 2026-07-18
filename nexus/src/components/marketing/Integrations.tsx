'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'Vercel',
    logo: (
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-5 bg-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        <span className="text-white font-semibold text-lg tracking-tight">Vercel</span>
      </div>
    ),
  },
  {
    name: 'Tailwind Labs',
    logo: (
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        <span className="text-white font-semibold text-lg tracking-tight">tailwindlabs</span>
      </div>
    ),
  },
  {
    name: 'Linear',
    logo: (
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-5 rounded-md bg-gradient-to-br from-indigo-500 to-purple-500" />
        <span className="text-white font-semibold text-lg tracking-tight">Linear</span>
      </div>
    ),
  },
  {
    name: 'Supabase',
    logo: (
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-5 rounded-full bg-emerald-500" />
        <span className="text-white font-semibold text-lg tracking-tight">supabase</span>
      </div>
    ),
  },
  {
    name: 'Clerk',
    logo: (
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-5 bg-blue-500 rounded-sm" />
        <span className="text-white font-semibold text-lg tracking-tight">Clerk</span>
      </div>
    ),
  },
  {
    name: 'Acme Inc.',
    logo: (
      <div className="flex items-center gap-2.5">
        <div className="w-5 h-5 rounded-full border-2 border-white" />
        <span className="text-white font-semibold text-lg tracking-tight">Acme Inc.</span>
      </div>
    ),
  },
];

export default function Integrations() {
  return (
    <section className="relative py-16 border-b border-white/[0.06] bg-[#030303] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6C5CE7]/5 via-transparent to-[#A78BFA]/5 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-[#A1A1AA] font-medium mb-10 tracking-wide uppercase"
        >
          Trusted by developers at
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-70 hover:opacity-100 transition-opacity duration-500"
        >
          {logos.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105 hover:opacity-100 cursor-default"
            >
              {/* ACTION REQUIRED: Replace the inline SVG/div placeholder with <Image src={`/logos/${company.name.toLowerCase()}.svg`} alt={...} width={...} height={...} /> for each logo */}
              {company.logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}