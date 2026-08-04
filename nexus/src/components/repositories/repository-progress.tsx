'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle, Zap, RefreshCw } from 'lucide-react';
import { RepositoryStatus } from "@/types/repository";

interface RepositoryProgressProps {
  status: RepositoryStatus;
  progress?: number;
  message?: string;
  onStart?: () => void;
  onRetry?: () => void;
}

export function RepositoryProgress({
  status,
  progress = 0,
  message,
  onStart,
  onRetry,
}: RepositoryProgressProps) {
  return (
    <AnimatePresence mode="wait">
      {status === 'CONNECTED' && (
        <motion.button
          key="connected"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 0.96 }}
          onClick={onStart}
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181B] focus-visible:ring-[#7C3AED]"
        >
          <Zap size={16} className="text-white/90" />
          <span>Start Indexing</span>
        </motion.button>
      )}

      {status === 'INDEXING' && (
        <motion.div
          key="indexing"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-full flex flex-col gap-3 bg-[#09090B]/50 border border-[#27272A] rounded-xl p-3.5 shadow-inner"
        >
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#A1A1AA] font-medium tracking-wide">
              {message ?? 'Building knowledge base...'}
            </span>
            <span className="text-[#7C3AED] font-bold tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="relative h-1.5 w-full rounded-full bg-[#27272A] overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]"
              initial={{ width: 0 }}
              animate={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            />
          </div>

          <div className="flex items-center gap-2 text-[11px] font-medium text-[#7C3AED] animate-pulse">
            <Loader2 size={12} className="animate-spin" />
            Processing chunks...
          </div>
        </motion.div>
      )}

      {status === 'READY' && (
        <motion.div
          key="ready"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-sm font-semibold shadow-inner"
        >
          <CheckCircle2 size={16} />
          <span>Successfully Indexed</span>
        </motion.div>
      )}

      {status === 'FAILED' && (
        <motion.div 
          key="failed"
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 text-[13px] font-medium text-[#EF4444] px-1">
            <AlertCircle size={14} />
            <span>Indexing failed</span>
          </div>
          <button
            onClick={onRetry}
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#EF4444]/10 hover:bg-[#EF4444]/20 border border-[#EF4444]/20 text-[#EF4444] text-sm font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181B] focus-visible:ring-[#EF4444] active:scale-95"
          >
            <RefreshCw size={16} />
            <span>Retry Indexing</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}