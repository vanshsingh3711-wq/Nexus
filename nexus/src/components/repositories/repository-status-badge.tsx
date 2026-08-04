import { RepositoryStatus } from '@/types/repository';

const statusStyles: Record<RepositoryStatus, { bg: string; text: string; dot: string }> = {
  CONNECTED: { bg: 'bg-[#22C55E]/10', text: 'text-[#22C55E]', dot: 'bg-[#22C55E]' },
  INDEXING: { bg: 'bg-[#3B82F6]/10', text: 'text-[#3B82F6]', dot: 'bg-[#3B82F6]' },
  READY: { bg: 'bg-[#7C3AED]/10', text: 'text-[#7C3AED]', dot: 'bg-[#7C3AED]' },
  FAILED: { bg: 'bg-[#EF4444]/10', text: 'text-[#EF4444]', dot: 'bg-[#EF4444]' },
  DELETED: { bg: 'bg-[#A1A1AA]/10', text: 'text-[#A1A1AA]', dot: 'bg-[#A1A1AA]' },
};

export function RepositoryStatusBadge({ status }: { status: RepositoryStatus }) {
  const style = statusStyles[status];
  console.log("Style:", style);

  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${style.bg} border border-transparent`}>
      <span className={`relative flex h-2 w-2`}>
        {status === 'INDEXING' && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${style.dot} opacity-75`}></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${style.dot}`}></span>
      </span>
      <span className={`text-[11px] font-medium tracking-wide ${style.text} uppercase`}>
        {status}
      </span>
    </div>
  );
}