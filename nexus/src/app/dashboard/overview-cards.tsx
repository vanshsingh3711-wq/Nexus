'use client';

import { FolderGit2, DatabaseZap, MessageSquare, HardDrive } from 'lucide-react';
import { StatsCard } from './stats-card';

const statsData = [
  {
    title: 'Repositories',
    value: '12',
    subtitle: '+2 this week',
    icon: FolderGit2,
    trend: 'up' as const,
  },
  {
    title: 'Indexed',
    value: '8',
    subtitle: 'Ready',
    icon: DatabaseZap,
    trend: 'neutral' as const,
  },
  {
    title: 'Conversations',
    value: '53',
    subtitle: '+14 today',
    icon: MessageSquare,
    trend: 'up' as const,
  },
  {
    title: 'Storage',
    value: '2.3GB',
    subtitle: 'of 10GB capacity',
    icon: HardDrive,
    trend: 'neutral' as const,
  }
];

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      {statsData.map((stat, index) => (
        <StatsCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          icon={stat.icon}
          trend={stat.trend}
          delay={index * 0.1} // Creates a cascading slide-up effect
        />
      ))}
    </div>
  );
}