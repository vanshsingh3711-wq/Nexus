// src/components/marketing/hero/dashboard/types.ts

export interface ProjectStat {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  percentage: string;
  trend: 'up' | 'down';
  graphData: number[];
}

export interface Deployment {
  name: string;
  status: 'live' | 'building' | 'ready';
  url: string;
}

export interface ActivityItem {
  id: string;
  type: 'commit' | 'pr' | 'deploy' | 'bug';
  message: string;
  time: string;
}

export interface PerformancePoint {
  day: string;
  value: number;
}