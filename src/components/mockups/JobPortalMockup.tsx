export default function JobPortalMockup() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-ink-600 bg-ink-900">
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-800 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <div className="ml-3 flex-1 rounded-md bg-ink-700 px-3 py-1">
          <span className="font-mono text-[10px] text-paper-400">jobportal.app</span>
        </div>
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between border-b border-ink-700 px-4 py-3">
        <span className="font-display text-sm font-bold text-accent-400">JobPortal</span>
        <div className="flex gap-4">
          <span className="font-mono text-[10px] text-paper-400">Jobs</span>
          <span className="font-mono text-[10px] text-paper-400">Companies</span>
          <span className="font-mono text-[10px] text-accent-400">Dashboard</span>
        </div>
        <span className="rounded-md bg-ink-700 px-2.5 py-1 font-mono text-[10px] text-paper-300">Login</span>
      </div>

      {/* Search */}
      <div className="flex gap-2 px-4 py-3">
        <div className="flex flex-1 items-center gap-2 rounded-lg border border-ink-600 bg-ink-800 px-3 py-2">
          <svg width="12" height="12" viewBox="0 0 12 12" className="text-paper-400">
            <circle cx="5" cy="5" r="3.5" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M8 8L11 11" stroke="currentColor" strokeWidth="1" />
          </svg>
          <span className="font-mono text-[10px] text-paper-400">Search jobs...</span>
        </div>
        <div className="rounded-lg border border-ink-600 bg-ink-800 px-3 py-2">
          <span className="font-mono text-[10px] text-paper-400">Filter ▾</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-1.5 px-4 pb-3">
        {['Remote', 'Full-time', 'React', 'PHP'].map((f) => (
          <span key={f} className="rounded-md bg-ink-700 px-2 py-1 font-mono text-[9px] text-paper-300">{f}</span>
        ))}
      </div>

      {/* Job cards */}
      <div className="space-y-2 px-4 pb-4">
        {[
          { title: 'Frontend Developer', company: 'TechCorp', loc: 'Remote', sal: '₹4-6L' },
          { title: 'PHP Developer', company: 'WebSolutions', loc: 'Bangalore', sal: '₹3-5L' },
          { title: 'Full-stack Engineer', company: 'DataFlow', loc: 'Hybrid', sal: '₹5-8L' },
        ].map((job) => (
          <div
            key={job.title}
            className="group/card rounded-lg border border-ink-700 bg-ink-800 p-3 transition-colors duration-300 hover:border-accent-400/40"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-paper-100">{job.title}</span>
                <div className="mt-0.5 flex gap-2">
                  <span className="font-mono text-[9px] text-paper-400">{job.company}</span>
                  <span className="font-mono text-[9px] text-ink-500">·</span>
                  <span className="font-mono text-[9px] text-paper-400">{job.loc}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[10px] text-accent-400">{job.sal}</div>
                <span className="mt-1 inline-block rounded-md bg-accent-400/10 px-2 py-0.5 font-mono text-[9px] text-accent-400 transition-colors duration-300 group-hover/card:bg-accent-400 group-hover/card:text-ink-950">
                  Apply →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
