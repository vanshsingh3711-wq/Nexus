import { FolderGit2, Sparkles, Plus } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-[#27272A] rounded-[24px] bg-[#18181B]/10">
      
      {/* Icon Illustration */}
      <div className="relative flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-[#27272A]/30 text-[#A1A1AA]">
        <FolderGit2 size={32} />
        <div className="absolute -top-2 -right-2 p-1.5 rounded-full bg-[#09090B] text-[#7C3AED]">
          <Sparkles size={16} className="animate-pulse" />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2 tracking-tight">
        No repositories yet
      </h3>
      <p className="text-sm text-[#A1A1AA] max-w-sm mb-8">
        Import your first GitHub repository to start indexing your codebase, chatting with AI, and managing your architecture.
      </p>
      
      <button className="flex items-center justify-center gap-2 bg-[#FAFAFA] hover:bg-[#E4E4E7] text-[#09090B] px-6 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] focus-visible:ring-[#FAFAFA]">
        <Plus size={18} />
        <span>Import Repository</span>
      </button>
    </div>
  );
}