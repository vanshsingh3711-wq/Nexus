// src/components/marketing/hero/dashboard/mockData.ts

import { FolderGit2, Rocket, CheckCircle2, Bug } from 'lucide-react';
import { ProjectStat, Deployment, ActivityItem, PerformancePoint } from './types';

export const stats: ProjectStat[] = [
  { icon: FolderGit2, title: 'Active Projects', value: '24', percentage: '+12%', trend: 'up', graphData: [10, 15, 14, 18, 20, 24, 22, 26] },
  { icon: Rocket, title: 'Deployments', value: '142', percentage: '+8%', trend: 'up', graphData: [80, 90, 100, 110, 120, 130, 140, 142] },
  { icon: CheckCircle2, title: 'Tests Passed', value: '98.5%', percentage: '+2.1%', trend: 'up', graphData: [95, 96, 97, 98, 97, 98.5, 98.5, 98.5] },
  { icon: Bug, title: 'Bugs Fixed', value: '37', percentage: '-15%', trend: 'down', graphData: [20, 25, 30, 28, 35, 40, 37, 37] },
];

export const deployments: Deployment[] = [
  { name: 'Production', status: 'live', url: 'nexus.app' },
  { name: 'Staging', status: 'building', url: 'staging.nexus.dev' },
  { name: 'Preview #42', status: 'ready', url: 'pr-42.preview.nexus.dev' },
];

export const activities: ActivityItem[] = [
  { id: '1', type: 'commit', message: 'Fixed authentication bug', time: '2m ago' },
  { id: '2', type: 'deploy', message: 'Deployed to production', time: '12m ago' },
  { id: '3', type: 'pr', message: 'Merged PR #142', time: '1h ago' },
  { id: '4', type: 'bug', message: 'Resolved issue #89', time: '3h ago' },
];

export const performanceData: PerformancePoint[] = [
  { day: 'Mon', value: 45 },
  { day: 'Tue', value: 52 },
  { day: 'Wed', value: 49 },
  { day: 'Thu', value: 60 },
  { day: 'Fri', value: 55 },
  { day: 'Sat', value: 70 },
  { day: 'Sun', value: 65 },
];