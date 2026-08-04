'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const filters = ['All', 'Indexed', 'Connected', 'Failed', 'Private', 'Public'];

export function RepositoryFilters() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-hide w-full border-b border-[#27272A]/50">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className="relative px-4 py-2 text-sm font-medium outline-none whitespace-nowrap transition-colors"
        >
          {activeFilter === filter && (
            <motion.div
              layoutId="active-filter-pill"
              className="absolute inset-0 bg-[#27272A]/50 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span 
            className={`relative z-10 ${
              activeFilter === filter ? 'text-[#FAFAFA]' : 'text-[#A1A1AA] hover:text-[#E4E4E7]'
            }`}
          >
            {filter}
          </span>
        </button>
      ))}
    </div>
  );
}