const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Focus' },
]

const services = [
  'WordPress Website Design',
  'Landing Pages',
  'Business Branding',
  'UI/UX Enhancements',
  'Website Optimization',
  'Maintenance & Support',
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#06070b] text-white">
      <div className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(46,94,255,0.24),_transparent_42%),linear-gradient(180deg,_rgba(7,9,14,0.24),_rgba(7,9,14,0.9))]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="text-lg font-semibold tracking-[0.22em] uppercase text-white/90">
            D.M.K. Devudu
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#portfolio" className="transition hover:text-white">Portfolio</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <main className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 pb-20 pt-16 md:px-10 md:pt-24">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200">
              WordPress Website Creator
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Build a bold digital presence that turns visitors into customers.
            </h1>

            <p className="mt-6 max-w-xl text-base text-slate-200 md:text-lg">
              I’m Durga Mani Kumar Devudu, creating modern, conversion-focused websites
              with clean design, strong strategy, and high-performance WordPress builds.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Book a Project
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-300">{stat.value}</div>
                <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              About
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Your next website should feel premium.</h2>
          </div>

          <div className="text-lg leading-8 text-slate-300">
            I help businesses and brands create sleek, user-friendly websites that
            combine strong visual identity with practical conversion goals.
          </div>
        </div>
      </section>

      <section id="services" className="bg-white/5 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Services
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-slate-200">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Contact
          </p>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">Ready to launch your next site?</h3>
          <a
            href="mailto:hello@yourdomain.com"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-950"
          >
            hello@yourdomain.com
          </a>
        </div>
      </section>
    </div>
  )
}
