'use client';

import { Search, Plus } from 'lucide-react';

export function RepositorySearch() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
      <div className="relative group w-full sm:max-w-md">
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1AA] group-focus-within:text-[#7C3AED] transition-colors" 
        />
        <input 
          type="text" 
          placeholder="Search repositories..." 
          className="w-full bg-[#18181B]/50 border border-[#27272A] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#FAFAFA] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#7C3AED]/50 focus:ring-1 focus:ring-[#7C3AED]/50 transition-all shadow-inner"
        />
      </div>
      
      <button className="flex items-center justify-center gap-2 bg-[#FAFAFA] hover:bg-[#E4E4E7] text-[#09090B] px-5 py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] focus-visible:ring-[#FAFAFA] w-full sm:w-auto ml-auto">
        <Plus size={18} />
        <span>Import Repository</span>
      </button>
    </div>
  );
}