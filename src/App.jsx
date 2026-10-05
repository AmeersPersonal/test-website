import { useMemo, useState } from 'react'
import { ArrowRight, BriefcaseBusiness, GraduationCap, Layers3, Sparkles } from 'lucide-react'
import { projects, experience, skills } from './data/portfolioData'
import { Header } from './components/Header'
import { ProjectGrid } from './components/ProjectGrid'
import { ProjectDrawer } from './components/ProjectDrawer'

const categories = ['All', ...new Set(projects.map((project) => project.category))]

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0]

  const openProject = (projectId) => {
    setSelectedProjectId(projectId)
    setIsDrawerOpen(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <section id="home" className="mb-8 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
          <article className="rounded-2xl border border-slate-800/90 bg-slate-900/70 p-6 backdrop-blur-sm sm:p-8">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-200">
              <GraduationCap className="h-3.5 w-3.5" />
              Computer Science Student Portfolio
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              Building measurable products with clean engineering and purposeful UX.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              I design and ship web + AI experiences focused on outcomes. Each project below is structured with
              a clear business context, technical execution details, and quantifiable impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:ameertayeh@gmail.com"
                className="inline-flex items-center rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-teal-400/60 hover:text-teal-100"
              >
                Contact Me
              </a>
            </div>
          </article>

          <aside className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-xs uppercase tracking-widest text-slate-400">Focus Areas</p>
              <p className="mt-2 text-sm text-slate-200">AI Systems · Full-stack Web · Accessibility-first UX</p>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-xs uppercase tracking-widest text-slate-400">Featured Work</p>
              <p className="mt-2 text-sm text-slate-200">4 projects with XYZ impact statements and technical deep-dives.</p>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <p className="text-xs uppercase tracking-widest text-slate-400">Currently</p>
              <p className="mt-2 text-sm text-slate-200">AI Fellow @ Handshake + NYIT CS Undergraduate</p>
            </article>
          </aside>
        </section>

        <section id="projects" className="mb-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-white">
              <Layers3 className="h-5 w-5 text-teal-300" />
              Project Showcase
            </h2>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project category filters">
              {categories.map((category) => {
                const active = category === activeCategory
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
                      active
                        ? 'border-teal-300 bg-teal-400/20 text-teal-100'
                        : 'border-slate-700 bg-slate-900/70 text-slate-300 hover:border-slate-500'
                    }`}
                    aria-pressed={active}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>

          <ProjectGrid projects={filteredProjects} onSelect={openProject} selectedProjectId={selectedProjectId} />
        </section>

        <section id="experience" className="mb-8 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <h3 className="mb-4 inline-flex items-center gap-2 text-xl font-semibold text-slate-50">
              <BriefcaseBusiness className="h-5 w-5 text-teal-300" />
              Experience Highlights
            </h3>
            <div className="space-y-4">
              {experience.map((role) => (
                <div key={role.title} className="rounded-xl border border-slate-800/80 bg-slate-950/70 p-4">
                  <p className="text-sm font-semibold text-teal-200">{role.title}</p>
                  <p className="text-xs text-slate-400">{role.org}</p>
                  <p className="mt-2 text-sm text-slate-200">{role.summary}</p>
                </div>
              ))}
            </div>
          </article>

          <article id="skills" className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
            <h3 className="mb-4 inline-flex items-center gap-2 text-xl font-semibold text-slate-50">
              <Sparkles className="h-5 w-5 text-teal-300" />
              Skills Snapshot
            </h3>
            <div className="space-y-4">
              {skills.map((group) => (
                <div key={group.name}>
                  <p className="mb-2 text-xs uppercase tracking-wider text-slate-400">{group.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>

      <ProjectDrawer project={selectedProject} isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  )
}

export default App
