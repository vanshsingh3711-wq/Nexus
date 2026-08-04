'use client';

import { useState, useEffect } from 'react';
import { DashboardRepository } from '@/types/repository';

export function useRepositories() {
  const [repositories, setRepositories] = useState<DashboardRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/api/repositories', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        
        // Map the raw backend data to include UI fallbacks
        const mappedData: DashboardRepository[] = (data.repositories || data).map((repo: any) => ({
          ...repo,
          // Ensure these UI fields exist even if the backend drops them
          status: repo.status || 'Connected',
          language: repo.language || 'TypeScript',
          lastIndexedAt: repo.lastIndexedAt || 'Never',
          updatedAt: repo.updatedAt || 'Recently',
        }));
        
        setRepositories(mappedData);
        
      } catch (err) {
        console.error("Error fetching repositories:", err);
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repositories, isLoading, error };
}