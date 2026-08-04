'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  GitBranch,
  Clock,
  Zap
} from 'lucide-react';
import { DashboardRepository } from '@/types/repository';
import { RepositoryStatusBadge } from './repository-status-badge';
import { RepositoryActions } from './repository-actions';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

interface RepositoryCardProps {
  repository: DashboardRepository;
  index?: number;
}

const languageColors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3572A5',
  Rust: '#DEA584',
  Go: '#00ADD8',
  Java: '#B07219',
  Ruby: '#701516',
  Unknown: '#7C3AED'
};


export function RepositoryCard({ repository, index = 0 }: RepositoryCardProps) {
  const repoUrl = `github.com/${repository.owner}/${repository.name}`;
  console.log(repository);
  console.log(repository.status);
  const langColor = languageColors[repository.language || 'Unknown'] || languageColors.Unknown;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className="group relative flex flex-col bg-[#18181B] border border-[#27272A] rounded-[24px] overflow-hidden transition-all duration-300 hover:border-[#7C3AED]/50 hover:shadow-[0_8px_30px_rgba(124,58,237,0.15)]"
    >


      <div className="p-5 flex-1 flex flex-col gap-4 relative z-10 pointer-events-none">

        <div className="flex items-start justify-between gap-4 pointer-events-auto">
          <div className="flex items-start gap-3 overflow-hidden">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#27272A]/30 text-[#A1A1AA] group-hover:text-[#7C3AED] group-hover:bg-[#7C3AED]/10 transition-colors shrink-0 shadow-inner">
              <FolderGit2 size={20} />
            </div>
            <div className="flex flex-col min-w-0 pt-0.5">
              <h3 className="text-base font-semibold text-[#FAFAFA] truncate flex items-center gap-2">
                <Link
                  href={`/dashboard/repository/${repository.githubRepositoryId}`}
                  className="hover:text-[#7C3AED] transition-colors"
                >
                  {repository.name}
                </Link>

                <span className="px-2 py-0.5 rounded bg-[#27272A]/50 text-[#A1A1AA] text-[10px] font-medium uppercase tracking-wider border border-[#27272A]">
                  {repository.visibility}
                </span>
              </h3>
              <a
                href={`https://${repoUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#A1A1AA] truncate mt-0.5 hover:text-[#FAFAFA] hover:underline transition-colors w-fit"
              >
                {repoUrl}
              </a>
            </div>
          </div>
          <RepositoryStatusBadge status={repository.status} />
        </div>

        {repository.description && (
          <p className="text-sm text-[#A1A1AA] line-clamp-2 leading-relaxed">
            {repository.description}
          </p>
        )}

        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-auto pt-4 text-xs text-[#A1A1AA] pointer-events-auto">

          <div className="flex items-center gap-1.5 group/meta">
            <GitBranch size={14} className="group-hover/meta:text-[#FAFAFA] transition-colors" />
            <span className="truncate group-hover/meta:text-[#FAFAFA] transition-colors">{repository.defaultBranch}</span>
          </div>

          <div className="flex items-center gap-1.5 group/meta">
            <span
              className="w-2 h-2 rounded-full shadow-sm"
              style={{ backgroundColor: langColor }}
            />
            <span className="truncate group-hover/meta:text-[#FAFAFA] transition-colors">
              {repository.language || 'Unknown'}
            </span>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-1.5 group/meta cursor-help w-fit">
                  <Clock size={14} className="group-hover/meta:text-[#FAFAFA] transition-colors" />
                  <span className="truncate group-hover/meta:text-[#FAFAFA] transition-colors">
                    Updated {repository.updatedAt}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-[#18181B] border-[#27272A] text-[#FAFAFA] text-xs">
                Last modified on GitHub
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-1.5 group/meta cursor-help w-fit">
                  <Zap size={14} className={`transition-colors ${repository.status === 'READY' ? 'text-[#7C3AED]' : 'group-hover/meta:text-[#FAFAFA]'}`} />
                  <span className={`truncate transition-colors ${repository.status === 'READY' ? 'text-[#7C3AED]' : 'group-hover/meta:text-[#FAFAFA]'}`}>
                    Indexed {repository.lastIndexedAt || 'Never'}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-[#18181B] border-[#27272A] text-[#FAFAFA] text-xs">
                Nexus knowledge base sync status
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

        </div>
      </div>

      <div className="relative z-10">
        <RepositoryActions repository={repository} />
      </div>
    </motion.div>
  );
}