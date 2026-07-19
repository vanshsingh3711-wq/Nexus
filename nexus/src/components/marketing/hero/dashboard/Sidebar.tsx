// src/components/marketing/hero/dashboard/Sidebar.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FolderGit2,
  MessageSquare,
  Bot,
  Code2,
  Rocket,
  BarChart3,
  Puzzle,
  Settings,
} from 'lucide-react';

const mainNav = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FolderGit2, label: 'Projects' },
  { icon: MessageSquare, label: 'AI Chat' },
  { icon: Bot, label: 'Agents' },
  { icon: Code2, label: 'Codebase' },
];

const secondaryNav = [
  { icon: Rocket, label: 'Deployments' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Puzzle, label: 'Integrations' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <div className="w-[240px] h-full bg-[#0F1117] border-r border-white/[0.06] flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 pt-6 pb-8">
        <div className="w-7 h-7 bg-gradient-to-br from-[#7C5CFF] to-[#4F8CFF] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xs">N</span>
        </div>
        <span className="text-white font-semibold text-sm tracking-tight">NEXUS</span>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 px-3 space-y-1">
        {mainNav.map((item) => (
          <motion.button
            key={item.label}
            whileHover={{ x: 2 }}
            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              item.active
                ? 'bg-[#7C5CFF]/10 text-[#7C5CFF]'
                : 'text-[#9CA3AF] hover:text-[#7C5CFF] hover:bg-white/4'
            }`}
          >
            <item.icon className={`w-4 h-4 ${item.active ? 'text-[#7C5CFF]' : ''}`} />
            {item.label}

          </motion.button>
        ))}
      </div>

      {/* Secondary Navigation */}
      <div className="px-3 mt-2 mb-4 space-y-1">
        {secondaryNav.map((item) => (
          <motion.button
            key={item.label}
            whileHover={{ x: 2 }}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-[#9CA3AF] hover:text-[#7C5CFF] hover:bg-white/[0.04] transition-colors"
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </motion.button>
        ))}
      </div>

      {/* User Profile */}
      <div className="mx-3 mb-5 p-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#4F8CFF] flex items-center justify-center text-white text-xs font-bold">
          JD
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white font-medium truncate">Jane Doe</p>
          <p className="text-xs text-[#9CA3AF] truncate">jane@nexus.dev</p>
        </div>
      </div>
    </div>
  );
}