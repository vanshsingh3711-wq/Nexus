'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  delay?: number;
}

export function StatsCard({ title, value, subtitle, icon: Icon, trend = 'neutral', delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      className="relative overflow-hidden bg-[#18181B]/80 backdrop-blur-xl border border-[#27272A] rounded-[24px] p-6 group transition-all duration-300 hover:border-[#7C3AED]/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]"
    >
      {/* Subtle hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full justify-between gap-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[#A1A1AA]">{title}</span>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#27272A]/40 group-hover:bg-[#7C3AED]/20 transition-colors duration-300 border border-transparent group-hover:border-[#7C3AED]/30">
            <Icon 
              size={18} 
              className="text-[#A1A1AA] group-hover:text-[#7C3AED] transition-colors duration-300" 
            />
          </div>
        </div>
        
        <div>
          <div className="text-3xl font-bold text-[#FAFAFA] tracking-tight tabular-nums">
            {value}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span 
              className={`text-xs font-medium px-2 py-0.5 rounded-full bg-opacity-10 ${
                trend === 'up' 
                  ? 'text-[#22C55E] bg-[#22C55E]' 
                  : trend === 'down' 
                  ? 'text-[#EF4444] bg-[#EF4444]' 
                  : 'text-[#A1A1AA] bg-[#27272A]'
              }`}
            >
              {subtitle}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}