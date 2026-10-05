export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="text-sm font-semibold text-slate-100 sm:text-base">
          Ameer Tayeh
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-2 text-xs sm:gap-4 sm:text-sm">
          <a className="text-slate-300 transition hover:text-teal-200" href="#projects">
            Projects
          </a>
          <a className="text-slate-300 transition hover:text-teal-200" href="#experience">
            Experience
          </a>
          <a className="text-slate-300 transition hover:text-teal-200" href="#skills">
            Skills
          </a>
        </nav>
      </div>
    </header>
  )
}
