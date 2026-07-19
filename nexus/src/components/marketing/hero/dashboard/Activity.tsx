// src/components/marketing/hero/dashboard/Activity.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Bug, Rocket, GitPullRequest } from 'lucide-react';
import { activities } from './mockData';
import { ActivityItem } from './types';

const iconMap = { commit: GitCommit, bug: Bug, deploy: Rocket, pr: GitPullRequest };
const colorMap = { commit: '#22C55E', bug: '#EF4444', deploy: '#7C5CFF', pr: '#F59E0B' };

function ActivityRow({ item }: { item: ActivityItem }) {
  const Icon = iconMap[item.type] || GitCommit;
  const color = colorMap[item.type] || '#9CA3AF';
  return (
    <motion.div initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} className="flex items-start gap-2 py-1.5">
      <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${color}15` }}>
        <Icon className="w-3 h-3" style={{ color }} />
      </div>
      <div className="flex-1 min-w-0 overflow-hidden">
        <p className="text-xs font-medium text-white truncate">{item.message}</p>
        <p className="text-[10px] text-[#6B7280] mt-0.5">{item.time}</p>
      </div>
    </motion.div>
  );
}

export default function Activity() {
  return (
    <div className="h-full bg-[#0F1117] border border-white/[0.06] rounded-2xl p-3 flex flex-col">
      <h3 className="text-sm font-semibold text-white mb-1">Recent Activity</h3>
      <div className="flex-1 flex flex-col justify-center">
        {activities.map((item) => <ActivityRow key={item.id} item={item} />)}
      </div>
    </div>
  );
}