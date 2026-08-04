'use client';

import { usePathname } from 'next/navigation';
import { Search, Bell, Plus, Sparkles } from 'lucide-react';

export function TopNavbar() {
  const pathname = usePathname();
  
  // Format the pathname into a clean title (e.g., /dashboard/projects -> Projects)
  const currentPath = pathname.split('/').pop();
  const pageTitle = currentPath 
    ? currentPath.charAt(0).toUpperCase() + currentPath.slice(1) 
    : 'Dashboard';

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-8 py-4 bg-[#09090B]/80 backdrop-blur-md border-b border-[#27272A]">
      
      {/* Left side: Context/Page Title */}
      <div className="flex items-center gap-4">
        <h1 className="text-[#FAFAFA] text-lg font-semibold tracking-tight">
          {pageTitle}
        </h1>
      </div>

      {/* Center & Right side: Actions */}
      <div className="flex items-center gap-6">
        
        {/* Global Search Bar (⌘ K) */}
        <div className="relative group w-64 lg:w-96 transition-all duration-300">
          <Search 
            size={16} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1AA] group-focus-within:text-[#7C3AED] transition-colors" 
          />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="w-full bg-[#18181B] border border-[#27272A] rounded-lg pl-10 pr-14 py-2 text-sm text-[#FAFAFA] placeholder:text-[#A1A1AA] focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-all shadow-inner"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
            <kbd className="hidden sm:inline-flex items-center justify-center h-5 px-1.5 bg-[#27272A] text-[#A1A1AA] rounded text-[10px] font-medium font-mono border border-[#27272A]/50 shadow-sm">
              ⌘
            </kbd>
            <kbd className="hidden sm:inline-flex items-center justify-center h-5 px-1.5 bg-[#27272A] text-[#A1A1AA] rounded text-[10px] font-medium font-mono border border-[#27272A]/50 shadow-sm">
              K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <button className="relative p-2 text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]/50 rounded-lg transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]">
            <Bell size={20} />
            {/* Ping Indicator */}
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
            </span>
          </button>

          {/* Primary Action Button - As seen in your layout spec & theme image */}
          <button className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.25)] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] focus-visible:ring-[#7C3AED]">
            <Sparkles size={16} className="text-white/90" />
            <span>Ask AI</span>
          </button>
          
          {/* Secondary Action - Import Repository */}
          <button className="hidden sm:flex items-center gap-2 bg-[#18181B] hover:bg-[#27272A] border border-[#27272A] text-[#FAFAFA] px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]">
            <Plus size={16} />
            <span>Import</span>
          </button>
        </div>
      </div>
    </header>
  );
}