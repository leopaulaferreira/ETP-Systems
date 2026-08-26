import { ShieldCheck, Cloud, Lock, ChevronRight, type LucideIcon } from 'lucide-react'
import { recommendations, type Recommendation, type RecommendationType } from '../../../mocks/dashboard.mock'

/** Mesmo ícone + cor usados em Trilhas para os mesmos temas (shield/cloud/lock), por consistência entre páginas. */
const thumbnailConfig: Record<Recommendation['thumbnail'], { icon: LucideIcon; className: string }> = {
  seguranca: { icon: ShieldCheck, className: 'bg-indigo-600' },
  nuvem: { icon: Cloud, className: 'bg-orange-500' },
  dados: { icon: Lock, className: 'bg-teal-500' },
}

const typeBadgeClasses: Record<RecommendationType, string> = {
  CURSO: 'bg-blue-50 text-blue-600',
  TRILHA: 'bg-violet-50 text-violet-600',
}

export default function RecommendationsCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-ink-200/60 bg-white p-6 shadow-card sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-ink-900">Recomendações para você</h2>
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-blue-600 transition-colors duration-150 hover:text-brand-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          Ver todas
          <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>

      <ul className="flex flex-col divide-y divide-ink-100">
        {recommendations.map((item) => {
          const { icon: Icon, className } = thumbnailConfig[item.thumbnail]
          return (
            <li key={item.id} className="first:[&>button]:pt-0 last:[&>button]:pb-0">
              <button
                type="button"
                className="group -mx-2 flex w-full items-center gap-3.5 rounded-xl px-2 py-4 text-left transition-colors duration-150 hover:bg-ink-100/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-brand-blue-400"
              >
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${className}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span className="truncate text-[15px] font-semibold text-ink-900">{item.title}</span>
                  <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-ink-500">
                    <span className={`rounded px-1.5 py-0.5 font-semibold ${typeBadgeClasses[item.type]}`}>
                      {item.type}
                    </span>
                    <span>{item.level}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.durationHours}h</span>
                  </span>
                </span>
                <ChevronRight
                  className="h-4 w-4 shrink-0 text-ink-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-blue-600"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
