'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <>
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
    </>
  );
}