import { ShieldCheck, Layers, Clock, ArrowRight } from 'lucide-react'
import Button from '../../../components/ui/Button'
import { levelIcons } from './TrailCard'
import { featuredLearningPath } from '../../../mocks/trilhas.mock'

export default function FeaturedTrailCard() {
  const data = featuredLearningPath
  const LevelIcon = levelIcons[data.level]

  return (
    <div className="relative flex flex-col gap-6 overflow-hidden rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-6 shadow-card sm:flex-row sm:items-center sm:gap-8 sm:p-7">
      {/* Detalhes tecnológicos sutis — grade + brilho, mesma linguagem do card "Continuar aprendendo" da Dashboard */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-brand-cyan-400/10 blur-3xl"
      />

      <div className="relative flex h-28 w-28 shrink-0 items-center justify-center self-center rounded-2xl border border-white/10 bg-white/[0.07]">
        <span aria-hidden="true" className="absolute left-[-22px] top-1/2 h-px w-5 -translate-y-3 bg-brand-cyan-400/40" />
        <span aria-hidden="true" className="absolute left-[-22px] top-1/2 h-px w-5 translate-y-3 bg-brand-cyan-400/40" />
        <span aria-hidden="true" className="absolute right-[-22px] top-1/2 h-px w-5 -translate-y-3 bg-brand-cyan-400/40" />
        <span aria-hidden="true" className="absolute right-[-22px] top-1/2 h-px w-5 translate-y-3 bg-brand-cyan-400/40" />
        <ShieldCheck className="h-16 w-16 text-brand-cyan-400 sm:h-20 sm:w-20" strokeWidth={1.5} aria-hidden="true" />
      </div>

      <div className="relative flex flex-1 flex-col gap-3">
        <span className="w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-cyan-300">
          {data.badge}
        </span>
        <h2 className="text-2xl font-bold text-white">{data.title}</h2>
        <p className="max-w-xl text-sm leading-relaxed text-white/65">{data.description}</p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm text-white/70">
          <span className="flex items-center gap-1.5">
            <Layers className="h-4 w-4 text-brand-cyan-400" strokeWidth={2} aria-hidden="true" />
            {data.courseCount} cursos
          </span>
          <span className="flex items-center gap-1.5">
            <LevelIcon className="h-4 w-4 text-brand-cyan-400" strokeWidth={2} aria-hidden="true" />
            {data.level}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-brand-cyan-400" strokeWidth={2} aria-hidden="true" />
            {data.durationHours}h
          </span>
        </div>
      </div>

      <div className="relative shrink-0 sm:self-center">
        <Button type="button" className="w-full sm:w-auto">
          {data.ctaLabel}
          <ArrowRight className="ml-1.5 h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
