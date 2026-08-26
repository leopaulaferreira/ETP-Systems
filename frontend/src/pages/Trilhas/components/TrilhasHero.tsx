import { Route as RouteIcon, GraduationCap, TrendingUp, CheckCircle2, Star } from 'lucide-react'

export default function TrilhasHero() {
  return (
    <section className="flex items-center justify-between gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-[28px] font-bold leading-tight tracking-[-0.01em] text-ink-900">Explorar Trilhas</h1>
        <p className="max-w-lg text-sm leading-relaxed text-ink-500">
          Descubra jornadas de aprendizagem estruturadas para impulsionar suas habilidades e crescer na sua carreira.
        </p>
      </div>
      <TrilhasIllustration />
    </section>
  )
}

/**
 * Ilustração decorativa PLACEHOLDER.
 *
 * O projeto ainda não tem um asset ilustrado para o tema "jornada de
 * aprendizagem". Esta composição usa ícones lucide-react organizados como
 * uma trilha de marcos ao longo de um caminho pontilhado, na mesma
 * linguagem visual do hero da Dashboard (cartão claro + blobs suaves),
 * até que uma ilustração definitiva seja fornecida pelo time de design.
 */
function TrilhasIllustration() {
  return (
    <div aria-hidden="true" className="relative hidden h-[176px] w-[340px] shrink-0 items-center lg:flex">
      <div className="absolute -right-8 -top-6 h-36 w-36 rounded-full bg-brand-blue-500/10 blur-2xl" />
      <div className="absolute -bottom-10 left-6 h-32 w-32 rounded-full bg-brand-cyan-400/10 blur-2xl" />

      <div className="relative flex h-full w-full items-center overflow-hidden rounded-3xl border border-ink-200/70 bg-white/70 px-8 shadow-card backdrop-blur-sm">
        <svg
          viewBox="0 0 240 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-8 top-1/2 h-16 w-[calc(100%-4rem)] -translate-y-1/2"
          fill="none"
        >
          <path
            d="M6 72C44 18 82 92 120 42C158 -8 196 62 234 26"
            stroke="var(--color-brand-blue-500)"
            strokeOpacity="0.32"
            strokeWidth="2.5"
            strokeDasharray="1 10"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative flex w-full items-center justify-between">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-600 text-white shadow-card">
            <RouteIcon className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white shadow-card">
            <CheckCircle2 className="h-4 w-4" strokeWidth={2} />
          </span>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-cyan-500/15 text-brand-cyan-500">
            <GraduationCap className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-white shadow-card">
            <Star className="h-4 w-4" strokeWidth={2} fill="currentColor" />
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500 text-white shadow-card">
            <TrendingUp className="h-5 w-5" strokeWidth={2} />
          </span>
        </div>
      </div>
    </div>
  )
}
