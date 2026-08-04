'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
export default function HeroButtons() {
  const router = useRouter();
  
    function handleClick() {
      router.push("/auth/login");
    }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap items-center gap-4 mb-12"
    >
      <button
        onClick={handleClick}
        className={buttonVariants({
          className:
            'inline-flex items-center gap-2 bg-gradient-to-r from-[#6C5CE7] to-[#8B5CF6] hover:from-[#7C6DF0] hover:to-[#9B6CF9] text-white font-semibold shadow-[0_0_30px_rgba(108,92,231,0.5)] hover:shadow-[0_0_40px_rgba(108,92,231,0.7)] transition-all duration-300 rounded-lg px-7 py-4 h-auto text-base',
        })}
      >
        Get Started Free
        <ArrowRight className="w-5 h-5" />
      </button>
      <Link
        href="#demo"
        className={buttonVariants({
          variant: 'outline',
          className:
            'inline-flex items-center gap-2 border-white/[0.1] bg-transparent hover:bg-white/[0.05] text-white font-semibold rounded-lg px-7 py-4 h-auto text-base',
        })}
      >
        <Play className="w-5 h-5" />
        Watch Demo
      </Link>
    </motion.div>
  );
}