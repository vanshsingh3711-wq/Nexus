// src/components/marketing/hero/dashboard/Topbar.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Command, Bell, Zap } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="h-[72px] bg-[#0F1117] border-b border-white/[0.06] flex items-center px-6">
      {/* Left: Workspace Switcher */}
      <div className="flex items-center gap-4 flex-1">
        <motion.button
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/[0.04] transition-colors"
        >
          <div className="w-5 h-5 bg-gradient-to-br from-[#7C5CFF] to-[#4F8CFF] rounded-md" />
          nexus-monorepo
          <span className="text-[#9CA3AF] text-xs ml-1">▾</span>
        </motion.button>
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center gap-3 flex-1 justify-center">
        <div className="relative w-[420px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
          <input
            disabled
            placeholder="Search anything..."
            className="w-full h-11 pl-11 pr-16 bg-white/[0.04] border border-white/[0.06] rounded-full text-sm text-white placeholder-[#9CA3AF] outline-none focus:border-[#7C5CFF]/40 transition-colors"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-medium text-[#9CA3AF] bg-white/[0.06] px-2 py-0.5 rounded-full">
            <Command className="w-2.5 h-2.5" />K
          </div>
        </div>

        {/* Ask AI Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 w-30 h-8 bg-gradient-to-r from-[#7C5CFF] to-[#4F8CFF] text-white text-sm font-semibold rounded-md shadow-lg shadow-[#7C5CFF]/20 hover:shadow-[#7C5CFF]/30 transition-shadow"
        >
          <Zap className="w-4 h-4" />
          Ask AI
        </motion.button>
      </div>

      {/* Right: Notifications & Avatar */}
      <div className="flex items-center gap-4 flex-1 justify-end">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="relative text-[#9CA3AF] hover:text-white transition-colors"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
        </motion.button>

        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#4F8CFF] flex items-center justify-center text-white text-xs font-bold ring-2 ring-white/10">
          JD
        </div>
      </div>
    </div>
  );
}