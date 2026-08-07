'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, RefreshCw, Settings } from 'lucide-react';
import { DashboardRepository } from '@/types/repository';
import { RepositoryProgress } from './repository-progress';

interface RepositoryActionsProps {
  repository: DashboardRepository;
}

export function RepositoryActions({
  repository,
}: RepositoryActionsProps) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const [job, setJob] = useState<any>(null);

  // ⭐ CHANGED: UI status now comes from the job first, otherwise repository
  const displayStatus =
    job?.status === "RUNNING"
      ? "INDEXING"
      : job?.status === "COMPLETED"
      ? "READY"
      : job?.status === "FAILED"
      ? "FAILED"
      : repository.status;

  useEffect(() => {
    if (!jobId) return;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/index-jobs/${jobId}`);

        if (!res.ok) return;

        const data = await res.json();

        console.log("Polling:", data);

        setJob(data);

        if (data.status === "COMPLETED") {
          clearInterval(interval);

          // ⭐ CHANGED
          setJob(null);
          setJobId(null);

          window.location.reload();
        }

        if (data.status === "FAILED") {
          clearInterval(interval);

          // ⭐ CHANGED
          setJob(null);
          setJobId(null);

          window.location.reload();
        }
      } catch (err) {
        console.error(err);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [jobId]);

  const handleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();

    window.open(
      `https://github.com/${repository.owner}/${repository.name}`,
      "_blank"
    );
  };

  const handleStartIndexing = async () => {
    console.log("Start Index button clicked");

    try {
      const response = await fetch("/api/index-jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          githubRepositoryId: repository.githubRepositoryId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to start indexing");
      }

      const data = await response.json();

      // ⭐ CHANGED: Immediately show indexing UI
      setJob({
        status: "RUNNING",
        progress: 0,
        currentStep: "Preparing repository...",
      });

      setJobId(data.jobId);

      console.log("Started job:", data.jobId);
    } catch (err) {
      console.error(err);

      // ⭐ CHANGED: Return button if request fails
      setJob(null);
      setJobId(null);
    }
  };

  const handleRetry = () => {
    handleStartIndexing();
  };

  const handleSync = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (isSyncing) return;

    setIsSyncing(true);

    try {
      console.log("Sync:", repository.githubRepositoryId);

      await new Promise((r) => setTimeout(r, 1200));
    } finally {
      setIsSyncing(false);
    }
  };

  const handleSettings = (e: React.MouseEvent) => {
    e.stopPropagation();

    console.log("Settings");
  };

  return (
    <div
      className="grid grid-cols-[64px_1fr_64px_64px] border-t border-[#27272A] bg-[#09090B]/60 divide-x divide-[#27272A]"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={handleOpen}
        className="flex items-center justify-center py-3 text-[#A1A1AA] hover:text-white"
      >
        <ExternalLink size={15} />
      </button>

      <div className="flex items-center justify-center px-3 py-2">
        <RepositoryProgress
          // ⭐ CHANGED
          status={displayStatus}
          progress={job?.progress ?? 0}
          message={job?.currentStep}
          onStart={handleStartIndexing}
          onRetry={handleRetry}
        />
      </div>

      <button
        onClick={handleSync}
        disabled={isSyncing}
        className="flex items-center justify-center py-3 text-[#A1A1AA] hover:text-[#7C3AED]"
      >
        <RefreshCw
          size={15}
          className={isSyncing ? "animate-spin" : ""}
        />
      </button>

      <button
        onClick={handleSettings}
        className="flex items-center justify-center py-3 text-[#A1A1AA] hover:text-white"
      >
        <Settings size={15} />
      </button>
    </div>
  );
}