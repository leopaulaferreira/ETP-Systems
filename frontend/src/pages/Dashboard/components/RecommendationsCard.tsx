import { Lock, Cloud, Network, ChevronRight, type LucideIcon } from 'lucide-react'
import { recommendations, type Recommendation } from '../../../mocks/dashboard.mock'

const thumbnailIcons: Record<Recommendation['thumbnail'], LucideIcon> = {
  seguranca: Lock,
  nuvem: Cloud,
  dados: Network,
}

export default function RecommendationsCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-ink-200/60 bg-white p-6 shadow-card">
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
          const Icon = thumbnailIcons[item.thumbnail]
          return (
            <li key={item.id}>
              <button
                type="button"
                className="-mx-2 flex w-full items-center gap-3 rounded-lg px-2 py-3 text-left transition-colors duration-150 first:pt-0 last:pb-0 hover:bg-ink-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-brand-cyan-400">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className="truncate text-sm font-semibold text-ink-900">{item.title}</span>
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-500">
                    <span className="rounded bg-ink-100 px-1.5 py-0.5 font-semibold text-ink-700">{item.type}</span>
                    <span>{item.level}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.durationHours}h</span>
                  </span>
                </span>
                <ChevronRight className="h-4 w-4 shrink-0 text-ink-400" strokeWidth={2} aria-hidden="true" />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
