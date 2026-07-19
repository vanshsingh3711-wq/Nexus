'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Code2, ShieldCheck, Lock } from 'lucide-react';

const trustItems = [
  { icon: CheckCircle2, text: 'No credit card' },
  { icon: Code2, text: 'Open source (AGPLv3)' },
  { icon: ShieldCheck, text: 'Self-hosted' },
  { icon: Lock, text: 'Privacy first' },
];

export default function TrustItems() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[#A1A1AA] font-medium"
    >
      {trustItems.map((item) => (
        <div key={item.text} className="flex items-center gap-2">
          <item.icon className="w-4 h-4 text-[#6C5CE7]" />
          {item.text}
        </div>
      ))}
    </motion.div>
  );
}