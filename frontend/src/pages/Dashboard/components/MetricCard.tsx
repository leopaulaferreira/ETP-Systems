import { Route, GraduationCap, Award, Clock, ArrowRight, type LucideIcon } from 'lucide-react'
import { type MetricAccent, type MetricCardData } from '../../../mocks/dashboard.mock'

const icons: Record<MetricCardData['icon'], LucideIcon> = {
  trilhas: Route,
  cursos: GraduationCap,
  certificados: Award,
  horas: Clock,
}

const accentClasses: Record<MetricAccent, string> = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-emerald-50 text-emerald-600',
  purple: 'bg-violet-50 text-violet-600',
  orange: 'bg-amber-50 text-amber-600',
}

type MetricCardProps = {
  data: MetricCardData
}

export default function MetricCard({ data }: MetricCardProps) {
  const Icon = icons[data.icon]

  return (
    <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-ink-200/60 bg-white p-5 shadow-card">
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentClasses[data.accent]}`}>
        <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-ink-500">{data.label}</span>
        <span className="text-[26px] font-bold leading-none text-ink-900">{data.value}</span>
      </div>
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-semibold text-brand-blue-600 transition-colors duration-150 hover:text-brand-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
      >
        {data.ctaLabel}
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
      </button>
    </div>
  )
}
