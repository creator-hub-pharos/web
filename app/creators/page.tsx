import { CreatorsGrid } from "@/components/creators/creators-grid";
import { CreatorsFilters } from "@/components/creators/creators-filters";

export default function CreatorsPage() {
  return (
    <div className="min-h-screen py-12 justify-self-center">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col space-y-4 md:flex-row md:items-end md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Explore <span className="text-purple-400">Creators</span>
              </h1>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                Discover verified creators across various categories. Connect, collaborate, and
                grow together in the decentralized creator ecosystem.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <CreatorsFilters />
            <CreatorsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}