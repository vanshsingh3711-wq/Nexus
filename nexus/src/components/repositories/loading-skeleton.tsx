export function LoadingSkeleton() {
  return (
    <div className="flex flex-col bg-[#18181B] border border-[#27272A] rounded-[24px] overflow-hidden animate-pulse">
      <div className="p-5 flex-1 flex flex-col gap-4">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 w-full">
            <div className="w-10 h-10 rounded-xl bg-[#27272A]/50 shrink-0" />
            <div className="flex flex-col gap-2 w-full pt-1">
              <div className="h-4 bg-[#27272A]/50 rounded w-1/3" />
              <div className="h-3 bg-[#27272A]/30 rounded w-1/2" />
            </div>
          </div>
          <div className="w-16 h-6 rounded-full bg-[#27272A]/50 shrink-0" />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="h-3 bg-[#27272A]/30 rounded w-full" />
          <div className="h-3 bg-[#27272A]/30 rounded w-4/5" />
        </div>

        {/* Meta Data Grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mt-auto pt-6">
          <div className="h-3 bg-[#27272A]/30 rounded w-20" />
          <div className="h-3 bg-[#27272A]/30 rounded w-16" />
          <div className="h-3 bg-[#27272A]/30 rounded w-24" />
          <div className="h-3 bg-[#27272A]/30 rounded w-28" />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="grid grid-cols-4 border-t border-[#27272A] bg-[#09090B]/50 h-[45px] divide-x divide-[#27272A]">
        <div className="flex items-center justify-center p-2">
          <div className="w-12 h-3 bg-[#27272A]/50 rounded" />
        </div>
        <div className="flex items-center justify-center p-2">
          <div className="w-12 h-3 bg-[#27272A]/50 rounded" />
        </div>
        <div className="flex items-center justify-center p-2">
          <div className="w-12 h-3 bg-[#27272A]/50 rounded" />
        </div>
        <div className="flex items-center justify-center p-2">
          <div className="w-12 h-3 bg-[#27272A]/50 rounded" />
        </div>
      </div>
    </div>
  );
}