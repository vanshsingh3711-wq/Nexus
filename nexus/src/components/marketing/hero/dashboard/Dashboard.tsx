// src/components/marketing/hero/dashboard/Dashboard.tsx
'use client';

import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Stats from './Stats';
import CodeGraph from './CodeGraph';
import AIChat from './AIChat';
import Activity from './Activity';
import Deployments from './Deployments';
import Performance from './Performance';

export default function Dashboard() {
  return (
    <div className="w-[1005px] h-[760px] bg-[#050507] rounded-[28px] overflow-hidden flex flex-col">
      <Topbar />
      <div className="flex-1 flex min-h-0">
        <Sidebar />
        {/* Main content – no overflow, fixed heights */}
        <div className="flex-1 p-4 flex flex-col gap-3 bg-[#050507]">
          {/* Stats row – fixed height */}
          <div className="h-[100px]">
            <Stats />
          </div>

          {/* Middle row – takes remaining space */}
          <div className="flex-1 flex gap-3 min-h-0">
            <div className="flex-1 h-full">
              <CodeGraph />
            </div>
            <div className="w-[380px] h-full">
              <AIChat />
            </div>
          </div>

          {/* Bottom row – fixed height */}
          <div className="h-[120px] flex gap-3">
            <div className="flex-1 h-full">
              <Activity />
            </div>
            <div className="w-[200px] h-full">
              <Deployments />
            </div>
            <div className="flex-1 h-full">
              <Performance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}