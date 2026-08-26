import { MapPinned, BookCheck, TimerReset, BadgeCheck, ArrowRight, type LucideIcon } from 'lucide-react'
import { progressOverview, type ProgressItem } from '../../../mocks/dashboard.mock'

/** Mesmo esquema de cores de MetricCard (StatsGrid), já que cobrem as mesmas 4 métricas. */
const accentConfig: Record<ProgressItem['icon'], { icon: LucideIcon; badgeClass: string; barClass: string }> = {
  trilhas: { icon: MapPinned, badgeClass: 'border-blue-100 bg-blue-50 text-blue-600', barClass: 'from-blue-600 to-cyan-400' },
  cursos: { icon: BookCheck, badgeClass: 'border-emerald-100 bg-emerald-50 text-emerald-600', barClass: 'from-emerald-500 to-teal-400' },
  horas: { icon: TimerReset, badgeClass: 'border-orange-100 bg-orange-50 text-orange-600', barClass: 'from-orange-500 to-amber-400' },
  certificados: { icon: BadgeCheck, badgeClass: 'border-violet-100 bg-violet-50 text-violet-600', barClass: 'from-violet-600 to-fuchsia-400' },
}

export default function ProgressOverviewCard() {
  return (
    <section className="flex h-full flex-col gap-4 rounded-[22px] border border-ink-200/70 bg-white p-5 shadow-[0_12px_34px_-24px_rgba(15,23,42,0.4)] sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[18px] font-extrabold tracking-[-0.015em] text-ink-900">Meu progresso</h2>
        <button
          type="button"
          className="group flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-[13px] font-bold text-brand-blue-600 transition-colors duration-150 hover:bg-blue-50 hover:text-brand-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          Ver relatório
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>

      <ul className="flex flex-col divide-y divide-ink-100">
        {progressOverview.map((item) => {
          const { icon: Icon, badgeClass, barClass } = accentConfig[item.icon]
          const percent = Math.round((item.current / item.total) * 100)
          return (
            <li
              key={item.id}
              className="-mx-2 flex items-center gap-3 rounded-xl px-2 py-3 transition-colors duration-150 first:pt-0 last:pb-0 hover:bg-ink-100/60"
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${badgeClass}`}>
                <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
              </span>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[12px] font-bold text-ink-700">{item.label}</span>
                  <span className="text-[12px] font-extrabold text-ink-900">{item.displayValue}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100 shadow-inner">
                  <div className={`h-full rounded-full bg-gradient-to-r ${barClass}`} style={{ width: `${percent}%` }} />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
