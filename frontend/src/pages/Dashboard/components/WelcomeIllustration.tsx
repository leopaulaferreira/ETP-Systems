import { GraduationCap, TrendingUp, CheckCircle2 } from 'lucide-react'

/**
 * Ilustração decorativa da área de boas-vindas.
 *
 * PLACEHOLDER: o projeto ainda não possui um asset ilustrado (personagem/cena)
 * para o tema "aprendizado e progresso profissional". Esta composição usa
 * formas e ícones já disponíveis (lucide-react + tokens de cor do tema) até
 * que uma ilustração definitiva seja fornecida pelo time de design.
 */
export default function WelcomeIllustration() {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const progress = 0.75

  return (
    <div
      aria-hidden="true"
      className="relative hidden h-[168px] w-[280px] shrink-0 items-center justify-center lg:flex"
    >
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-brand-blue-500/10 blur-2xl" />
      <div className="absolute -bottom-8 left-2 h-28 w-28 rounded-full bg-brand-cyan-400/10 blur-2xl" />

      <div className="relative flex h-full w-full items-center justify-center rounded-3xl border border-ink-200/70 bg-white/70 shadow-card backdrop-blur-sm">
        <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--color-ink-100)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="var(--color-brand-blue-600)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - progress)}
          />
        </svg>
        <span className="absolute text-xl font-bold text-ink-900">75%</span>

        <div className="absolute -right-3 -top-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue-600 text-white shadow-card">
          <GraduationCap className="h-5 w-5" strokeWidth={2} />
        </div>
        <div className="absolute -bottom-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-card">
          <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
        </div>
        <div className="absolute -left-4 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-cyan-500/15 text-brand-cyan-500">
          <TrendingUp className="h-4 w-4" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  )
}
