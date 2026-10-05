import { ChartNoAxesCombined, ChevronsRight, Cpu, Globe, ShieldCheck } from 'lucide-react'

const iconMap = {
  AI: Cpu,
  Web: Globe,
  Accessibility: ShieldCheck,
  Impact: ChartNoAxesCombined,
}

export function ProjectGrid({ projects, selectedProjectId, onSelect }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {projects.map((project, index) => {
        const Icon = iconMap[project.category] ?? iconMap.Impact
        const selected = selectedProjectId === project.id

        return (
          <article
            key={project.id}
            className={`group flex min-h-52 flex-col justify-between rounded-2xl border p-5 transition sm:min-h-60 ${
              selected
                ? 'border-teal-300/80 bg-teal-400/10'
                : 'border-slate-800 bg-slate-900/80 hover:-translate-y-1 hover:border-teal-500/50'
            } ${index % 3 === 0 ? 'sm:col-span-2 xl:col-span-2' : ''}`}
          >
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-slate-300">
                <Icon className="h-3.5 w-3.5" />
                {project.category}
              </p>
              <h3 className="text-lg font-semibold text-slate-50">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{project.xyz.accomplished}</p>
            </div>
            <button
              type="button"
              onClick={() => onSelect(project.id)}
              className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-teal-200 transition hover:text-teal-100"
            >
              Open breakdown
              <ChevronsRight className="h-4 w-4" />
            </button>
          </article>
        )
      })}
    </div>
  )
}
