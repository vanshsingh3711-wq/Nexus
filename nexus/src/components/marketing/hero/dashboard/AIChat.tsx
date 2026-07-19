// src/components/marketing/hero/dashboard/AIChat.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Send } from 'lucide-react';

export default function AIChat() {
  return (
    <div className="h-full bg-[#0F1117] border border-white/[0.06] rounded-2xl p-4 flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#4F8CFF] flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Nexus AI</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-[10px] text-[#9CA3AF]">Online</span>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="self-end bg-[#7C5CFF]/10 border border-[#7C5CFF]/20 rounded-2xl rounded-br-sm px-3 py-2 max-w-[85%] ml-auto">
          <p className="text-xs text-white">How does auth work?</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-bl-sm px-3 py-2 max-w-[85%]">
          <p className="text-xs text-[#9CA3AF] mb-1.5">Uses NextAuth with GitHub OAuth.</p>
          <div className="bg-black/30 rounded-md p-2 font-mono text-[10px] text-[#22C55E]">
            providers: [GitHubProvider]
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center gap-1 text-[#9CA3AF] text-xs">
          <span>AI is typing</span><span className="animate-pulse">...</span>
        </motion.div>
      </div>
      <div className="mt-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-2.5 flex items-center gap-2">
        <input disabled placeholder="Ask anything..." className="flex-1 bg-transparent text-xs text-white placeholder-[#9CA3AF] outline-none" />
        <motion.button whileHover={{ scale: 1.1 }} className="w-7 h-7 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#4F8CFF] flex items-center justify-center shadow-md">
          <Send className="w-3.5 h-3.5 text-white" />
        </motion.button>
      </div>
    </div>
  );
}