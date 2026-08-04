'use client';

import { useRepositories } from '@/hooks/use-repositories';
import { RepositoryCard } from './repository-card';
import { LoadingSkeleton } from './loading-skeleton';
import { EmptyState } from './empty-state';

export function RepositoryGrid() {
  const { repositories, isLoading, error } = useRepositories();

  // 1. Error State
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-[#EF4444] border border-[#EF4444]/20 bg-[#EF4444]/5 rounded-[24px]">
        <p className="text-sm font-medium">Failed to load repositories. Please try again.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-[#EF4444]/10 hover:bg-[#EF4444]/20 text-[#EF4444] rounded-lg text-sm font-medium transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  // 2. Loading State (Skeletons)
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {/* Render 3 skeletons to match standard layout */}
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    );
  }

  // 3. Empty State
  if (!repositories || repositories.length === 0) {
    return (
      <div className="w-full">
        <EmptyState />
      </div>
    );
  }

  // 4. Success State (Data Grid)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
      {repositories.map((repo, index) => (
        <RepositoryCard 
          key={repo.githubRepositoryId} 
          repository={repo} 
          index={index} 
        />
      ))}
    </div>
  );
}