import { Sidebar } from '@/app/dashboard/sidebar';
import { TopNavbar } from '@/app/dashboard/top-navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-[#09090B] text-[#FAFAFA] overflow-hidden selection:bg-[#7C3AED]/30 selection:text-white font-sans">
      
      {/* Sidebar - Fixed width on the left */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
        
        {/* Top Navigation - Sticky */}
        <TopNavbar />

        {/* Scrollable Content Container */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth scrollbar-hide">
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7C3AED]/10 blur-[120px] rounded-full pointer-events-none z-0" />
          
          {/* Page Content */}
          <div className="container mx-auto p-6 lg:p-8 max-w-[1600px] relative z-10">
            {children}
          </div>
          
        </main>
      </div>
    </div>
  );
}