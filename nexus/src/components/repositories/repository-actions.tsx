'use client';

import { useState } from 'react';
import { ExternalLink, RefreshCw, Settings } from 'lucide-react';
import { DashboardRepository } from '@/types/repository';
import { RepositoryProgress } from './repository-progress';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface RepositoryActionsProps {
  repository: DashboardRepository;
}

export function RepositoryActions({ repository }: RepositoryActionsProps) {
  const [isSyncing, setIsSyncing] = useState(false);

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(
      `https://github.com/${repository.owner}/${repository.name}`,
      '_blank'
    );
  };

  const handleStartIndexing = async () => {
    console.log('Start indexing:', repository.githubRepositoryId);
  };

  const handleRetry = async () => {
    console.log('Retry indexing:', repository.githubRepositoryId);
  };

  const handleSync = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSyncing) return;
    
    setIsSyncing(true);
    try {
      console.log('Sync repository:', repository.githubRepositoryId);
      await new Promise((res) => setTimeout(res, 1200));
    } catch (err) {
      console.error('Failed to sync repository:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  const handleSettings = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Settings:', repository.githubRepositoryId);
  };

  return (
    <TooltipProvider>
      <div 
        className="grid grid-cols-[64px_1fr_64px_64px] border-t border-[#27272A] bg-[#09090B]/60 backdrop-blur-md divide-x divide-[#27272A] items-center"
        onClick={(e) => e.stopPropagation()} 
      >
        
  <Tooltip>
  <TooltipTrigger >
    <button
      onClick={handleOpen}
      aria-label="Open on GitHub"
      className="flex items-center justify-center py-3 text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]/40 transition-all outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#7C3AED]"
    >
      <ExternalLink size={15} />
    </button>
  </TooltipTrigger>

  <TooltipContent className="bg-[#18181B] border-[#27272A] text-[#FAFAFA] text-xs">
    Open on GitHub
  </TooltipContent>
</Tooltip>

        <div className="flex items-center justify-center px-3 py-2 w-full">
          <RepositoryProgress
            status={repository.status}
            progress={repository.progress ?? 0}
            message={repository.progressMessage}
            onStart={handleStartIndexing}
            onRetry={handleRetry}
          />
        </div>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={handleSync}
              disabled={isSyncing}
              aria-label="Sync codebase with GitHub"
              className="flex items-center justify-center py-3 text-[#A1A1AA] hover:text-[#7C3AED] hover:bg-[#7C3AED]/10 transition-all outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#7C3AED] disabled:opacity-50"
            >
              <RefreshCw 
                size={15} 
                className={isSyncing ? 'animate-spin text-[#7C3AED]' : 'transition-transform active:rotate-180'} 
              />
            </button>
          </TooltipTrigger>
          <TooltipContent className="bg-[#18181B] border-[#27272A] text-[#FAFAFA] text-xs">
            {isSyncing ? 'Syncing commits...' : 'Sync with GitHub'}
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <button
              onClick={handleSettings}
              aria-label="Repository settings"
              className="flex items-center justify-center py-3 text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A]/40 transition-all outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#7C3AED]"
            >
              <Settings size={15} className="transition-transform hover:rotate-45" />
            </button>
          </TooltipTrigger>
          <TooltipContent className="bg-[#18181B] border-[#27272A] text-[#FAFAFA] text-xs">
            Repository Settings
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}