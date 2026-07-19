// src/components/marketing/hero/HeroDashboard.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Dashboard from './dashboard/Dashboard';

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative lg:h-137.5 flex items-center justify-center"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#6C5CE7]/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#A78BFA]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Glass card */}
      <div className="relative w-full max-w-175 aspect-4/3 rounded-2xl border border-white/8 bg-[#050507]/90 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden">
        {/* Dashboard – scaled, centred, with purple glow */}
        <div
          className="absolute "
          style={{
            width: '1005px',
            height: '760px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(0.580)',
            transformOrigin: 'center center',
            boxShadow: '0 0 30px rgba(108,92,231,0.4), 0 0 15px rgba(108,92,231,0.2)',
            borderRadius: '28px',
          }}
        >
          <Dashboard />
        </div>
      </div>

      {/* Rotating accent ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-2xl border border-[#6C5CE7]/10 pointer-events-none"
        style={{
          width: 'calc(100% + 2rem)',
          height: 'calc(100% + 2rem)',
          top: '-1rem',
          left: '-1rem',
        }}
      />
    </motion.div>
  );
}