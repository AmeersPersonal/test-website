import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const tabs = ['why', 'execution', 'impact']

export function ProjectDrawer({ isOpen, project, onClose }) {
  const [activeTab, setActiveTab] = useState('why')

  useEffect(() => {
    setActiveTab('why')
  }, [project.id])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/80 transition ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-2xl flex-col border-l border-slate-800 bg-slate-900 shadow-2xl transition duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Project detail drawer"
      >
        <div className="flex items-start justify-between border-b border-slate-800 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">Project detail</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-50">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 p-2 text-slate-200 transition hover:border-slate-500"
            aria-label="Close project details"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="border-b border-slate-800 px-5 py-4 sm:px-6">
          <p className="text-sm text-slate-200">
            <span className="font-semibold text-teal-200">Accomplished:</span> {project.xyz.accomplished}
          </p>
          <p className="mt-2 text-sm text-slate-200">
            <span className="font-semibold text-teal-200">Measured by:</span> {project.xyz.measuredBy}
          </p>
          <p className="mt-2 text-sm text-slate-200">
            <span className="font-semibold text-teal-200">By doing:</span> {project.xyz.byDoing}
          </p>
        </div>

        <div className="flex gap-2 border-b border-slate-800 px-5 py-4 sm:px-6" role="tablist" aria-label="Project sections">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition ${
                activeTab === tab
                  ? 'border-teal-300 bg-teal-400/20 text-teal-100'
                  : 'border-slate-700 text-slate-300 hover:border-slate-500'
              }`}
              aria-pressed={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-6">
          {activeTab === 'why' && <p className="text-sm leading-7 text-slate-200">{project.why}</p>}

          {activeTab === 'execution' && (
            <div className="space-y-4">
              <p className="text-sm leading-7 text-slate-200">{project.execution.summary}</p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
                {project.execution.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.execution.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-xs text-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="space-y-3">
              <p className="text-sm leading-7 text-slate-200">{project.impact.summary}</p>
              <ul className="space-y-2 text-sm text-slate-100">
                {project.impact.metrics.map((metric) => (
                  <li key={metric} className="rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2">
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
