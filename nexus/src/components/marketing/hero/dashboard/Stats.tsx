// src/components/marketing/hero/dashboard/Stats.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { stats as statsData } from './mockData';
import { ProjectStat } from './types';

function MiniGraph({ data, trend }: { data: number[]; trend: 'up' | 'down' }) {
  const maxVal = Math.max(...data);
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / maxVal) * 100}`)
    .join(' ');
  return (
    <svg viewBox="0 0 100 100" className="w-full h-6">
      <polyline
        points={points}
        fill="none"
        stroke={trend === 'up' ? '#22C55E' : '#EF4444'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function StatCard({ stat }: { stat: ProjectStat }) {
  const Icon = stat.icon;
  const isUp = stat.trend === 'up';
  return (
    <motion.div
      whileHover={{ y: -1, boxShadow: '0 0 15px rgba(124,92,255,0.15)' }}
      className="bg-[#0F1117] border border-white/[0.06] rounded-2xl p-3 flex flex-col gap-1"
    >
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-xl bg-[#7C5CFF]/10 flex items-center justify-center">
          <Icon className="w-3.5 h-3.5 text-[#7C5CFF]" />
        </div>
        <span className="text-xs text-[#9CA3AF] font-medium">{stat.title}</span>
      </div>
      <div className="flex items-end gap-1.5">
        <span className="text-lg font-bold text-white leading-none">{stat.value}</span>
        <span className={`text-xs font-semibold ${isUp ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
          {stat.percentage}
        </span>
      </div>
      <MiniGraph data={stat.graphData} trend={stat.trend} />
    </motion.div>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-4 gap-3 h-full">
      {statsData.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
}