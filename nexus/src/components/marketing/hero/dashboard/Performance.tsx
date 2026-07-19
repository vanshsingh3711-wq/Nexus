// src/components/marketing/hero/dashboard/Performance.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { performanceData } from './mockData';

export default function Performance() {
  const maxVal = Math.max(...performanceData.map((p) => p.value));
  const points = performanceData
    .map((p, i) => `${(i / (performanceData.length - 1)) * 100},${100 - (p.value / maxVal) * 100}`)
    .join(' ');

  return (
    <div className="h-full bg-[#0F1117] border border-white/[0.06] rounded-2xl p-4 flex flex-col">
      <h3 className="text-sm font-semibold text-white mb-1">Performance</h3>
      <div className="flex-1 relative">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C5CFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#4F8CFF" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
          ))}
          <motion.path d={`${points} L 100 100 L 0 100 Z`} fill="url(#areaGradient)"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} />
          <motion.path d={points} fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1.5 }} />
          {performanceData.map((p, i) => {
            const x = (i / (performanceData.length - 1)) * 100;
            const y = 100 - (p.value / maxVal) * 100;
            return (
              <motion.circle key={i} cx={x} cy={y} r="1.2" fill="#7C5CFF"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 + i * 0.08, type: 'spring' }} />
            );
          })}
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-[#6B7280] px-0.5">
          {performanceData.map((p) => <span key={p.day}>{p.day}</span>)}
        </div>
      </div>
    </div>
  );
}