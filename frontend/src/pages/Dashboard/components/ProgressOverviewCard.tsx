import { Route, GraduationCap, Clock, Award, type LucideIcon } from 'lucide-react'
import { progressOverview, type ProgressItem } from '../../../mocks/dashboard.mock'

const icons: Record<ProgressItem['icon'], LucideIcon> = {
  trilhas: Route,
  cursos: GraduationCap,
  horas: Clock,
  certificados: Award,
}

export default function ProgressOverviewCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-ink-200/60 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-ink-900">Meu progresso</h2>
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-blue-600 transition-colors duration-150 hover:text-brand-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          Ver relatório
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        {progressOverview.map((item) => {
          const Icon = icons[item.icon]
          const percent = Math.round((item.current / item.total) * 100)
          return (
            <li key={item.id} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2 text-sm font-medium text-ink-700">
                  <Icon className="h-4 w-4 text-ink-400" strokeWidth={2} aria-hidden="true" />
                  {item.label}
                </span>
                <span className="text-sm font-bold text-ink-900">{item.displayValue}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100">
                <div className="h-full rounded-full bg-brand-blue-600" style={{ width: `${percent}%` }} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
