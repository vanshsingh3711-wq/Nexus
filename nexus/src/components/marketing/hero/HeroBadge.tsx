'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Badge
        variant="outline"
        className="flex items-center gap-2 px-4 py-2 rounded-full border-white/[0.08] bg-white/[0.03] text-[#A1A1AA] hover:bg-white/[0.05] transition-colors"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6C5CE7] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6C5CE7]" />
        </span>
        The AI Operating System for Developers
      </Badge>
    </motion.div>
  );
}