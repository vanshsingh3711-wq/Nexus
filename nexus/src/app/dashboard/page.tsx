import { OverviewCards } from '@/app/dashboard/overview-cards';
import { RepositorySearch } from '@/components/repositories/repository-search';
import { RepositoryFilters } from '@/components/repositories/repository-filters';
import { RepositoryGrid } from '@/components/repositories/repository-grid';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10 w-full pb-10">
      
      {/* Hero Section */}
      <section className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-[#FAFAFA] tracking-tight">
          Welcome back 👋
        </h2>
        <p className="text-[#A1A1AA] text-base max-w-xl">
          Manage your repositories, index your code, and chat with AI.
        </p>
      </section>

      {/* Stats Overview */}
      <section>
        <OverviewCards />
      </section>

      {/* Repositories Section */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-[#FAFAFA] tracking-tight">
            Repositories
          </h3>
          <p className="text-sm text-[#A1A1AA]">
            Manage and index all connected codebases
          </p>
        </div>

        <div className="flex flex-col gap-4 bg-[#18181B]/30 border border-[#27272A] rounded-[24px] p-6">
          <RepositorySearch />
          <RepositoryFilters />
          <div className="mt-4">
            <RepositoryGrid />
          </div>
        </div>
      </section>

    </div>
  );
}