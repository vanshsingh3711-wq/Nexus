'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FolderGit2,
  MessageSquare,
  Bot,
  Code2,
  Rocket,
  BarChart,
  Blocks,
  Settings,
  ChevronsUpDown
} from 'lucide-react';

const mainNavItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', href: '/dashboard/projects', icon: FolderGit2 },
  { name: 'AI Chat', href: '/dashboard/chat', icon: MessageSquare },
  { name: 'Agents', href: '/dashboard/agents', icon: Bot },
  { name: 'Codebase', href: '/dashboard/codebase', icon: Code2 },
];

const secondaryNavItems = [
  { name: 'Deployments', href: '/dashboard/deployments', icon: Rocket },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart },
  { name: 'Integrations', href: '/dashboard/integrations', icon: Blocks },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  const renderNavItem = (item: { name: string; href: string; icon: any }) => {
    const isActive = pathname === item.href;
    const Icon = item.icon;

    return (
      <Link
        key={item.name}
        href={item.href}
        aria-current={isActive ? 'page' : undefined}
        className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] group transition-colors"
      >
        {/* Animated Background & Border Indicator */}
        {isActive && (
          <motion.div
            layoutId="sidebar-active-indicator"
            className="absolute inset-0 bg-[#7C3AED]/10 rounded-lg border-l-2 border-[#7C3AED]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        
        {/* Icon & Text Container (z-10 ensures it stays above the absolute background) */}
        <div className="relative z-10 flex items-center gap-3 w-full">
          <Icon 
            size={18} 
            className={`transition-colors duration-200 ${
              isActive 
                ? 'text-[#7C3AED]' 
                : 'text-[#A1A1AA] group-hover:text-[#FAFAFA]'
            }`} 
          />
          <span 
            className={`text-sm font-medium transition-colors duration-200 ${
              isActive 
                ? 'text-[#FAFAFA]' 
                : 'text-[#A1A1AA] group-hover:text-[#FAFAFA]'
            }`}
          >
            {item.name}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <aside className="flex flex-col w-[280px] h-screen bg-[#09090B] border-r border-[#27272A] px-3 py-6 flex-shrink-0">
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-3 mb-8 cursor-default">
        <div className="flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] shadow-[0_0_15px_rgba(124,58,237,0.3)]">
          <span className="text-white font-bold text-lg tracking-tight">N</span>
        </div>
        <span className="text-[#FAFAFA] font-bold text-lg tracking-wide">NEXUS</span>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <nav className="flex flex-col gap-1 mb-8">
          <span className="px-3 text-xs font-semibold text-[#A1A1AA]/50 uppercase tracking-wider mb-2">
            Overview
          </span>
          {mainNavItems.map(renderNavItem)}
        </nav>

        {/* Secondary Navigation */}
        <nav className="flex flex-col gap-1">
          <span className="px-3 text-xs font-semibold text-[#A1A1AA]/50 uppercase tracking-wider mb-2">
            System
          </span>
          {secondaryNavItems.map(renderNavItem)}
        </nav>
      </div>

      {/* User Profile Trigger */}
      <button 
        className="mt-auto pt-4 outline-none w-full"
        aria-label="User profile menu"
      >
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-transparent hover:border-[#27272A] hover:bg-[#18181B] transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-[#7C3AED]">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#3B82F6] text-white text-xs font-bold shadow-inner">
            JD
          </div>
          <div className="flex flex-col flex-1 items-start overflow-hidden">
            <span className="text-sm font-medium text-[#FAFAFA] truncate w-full text-left">Jane Doe</span>
            <span className="text-xs text-[#A1A1AA] group-hover:text-[#FAFAFA]/70 transition-colors truncate w-full text-left">jane@nexus.dev</span>
          </div>
          <ChevronsUpDown size={16} className="text-[#A1A1AA] group-hover:text-[#FAFAFA] transition-colors" />
        </div>
      </button>
    </aside>
  );
}