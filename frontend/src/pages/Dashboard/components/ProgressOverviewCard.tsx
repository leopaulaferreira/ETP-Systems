import { Route, GraduationCap, Clock, Award, type LucideIcon } from 'lucide-react'
import { progressOverview, type ProgressItem } from '../../../mocks/dashboard.mock'

/** Mesmo esquema de cores de MetricCard (StatsGrid), já que cobrem as mesmas 4 métricas. */
const accentConfig: Record<ProgressItem['icon'], { icon: LucideIcon; badgeClass: string; barClass: string }> = {
  trilhas: { icon: Route, badgeClass: 'bg-blue-50 text-blue-600', barClass: 'bg-blue-500' },
  cursos: { icon: GraduationCap, badgeClass: 'bg-emerald-50 text-emerald-600', barClass: 'bg-emerald-500' },
  horas: { icon: Clock, badgeClass: 'bg-amber-50 text-amber-600', barClass: 'bg-amber-500' },
  certificados: { icon: Award, badgeClass: 'bg-violet-50 text-violet-600', barClass: 'bg-violet-500' },
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

      <ul className="flex flex-col divide-y divide-ink-100">
        {progressOverview.map((item) => {
          const { icon: Icon, badgeClass, barClass } = accentConfig[item.icon]
          const percent = Math.round((item.current / item.total) * 100)
          return (
            <li
              key={item.id}
              className="-mx-2 flex items-center gap-3 rounded-lg px-2 py-3.5 transition-colors duration-150 first:pt-0 last:pb-0 hover:bg-ink-100/50"
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${badgeClass}`}>
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-ink-700">{item.label}</span>
                  <span className="text-sm font-bold text-ink-900">{item.displayValue}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                  <div className={`h-full rounded-full ${barClass}`} style={{ width: `${percent}%` }} />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
