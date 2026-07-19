// src/components/marketing/hero/dashboard/Deployments.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { deployments } from './mockData';
import { Deployment } from './types';

const statusConfig = {
  live: { color: '#22C55E', label: 'Live' },
  building: { color: '#F59E0B', label: 'Building' },
  ready: { color: '#4F8CFF', label: 'Ready' },
};

function DeploymentCard({ dep }: { dep: Deployment }) {
  const cfg = statusConfig[dep.status];
  return (
    <motion.div
      whileHover={{ y: -1 }}
      className="bg-white/[0.03] border border-white/[0.05] rounded-lg px-2 py-1.5 flex items-center justify-between"
    >
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium text-white truncate">{dep.name}</p>
        <p className="text-[9px] text-[#9CA3AF] truncate">{dep.url}</p>
      </div>
      <div className="flex items-center gap-1 ml-2 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: cfg.color }} />
        <span className="text-[9px] font-medium" style={{ color: cfg.color }}>{cfg.label}</span>
      </div>
    </motion.div>
  );
}

export default function Deployments() {
  return (
    <div className="h-full bg-[#0F1117] border border-white/[0.06] rounded-2xl p-2.5 flex flex-col">
      <h3 className="text-xs font-semibold text-white mb-1.5">Deployments</h3>
      <div className="flex-1 flex flex-col gap-1 overflow-hidden">
        {deployments.map((dep) => (
          <DeploymentCard key={dep.name} dep={dep} />
        ))}
      </div>
    </div>
  );
}