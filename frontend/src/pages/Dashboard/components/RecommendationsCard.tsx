import {
  ShieldCheck,
  CloudCog,
  Fingerprint,
  ArrowRight,
  Clock3,
  SignalLow,
  SignalMedium,
  SignalHigh,
  type LucideIcon,
} from 'lucide-react'
import { recommendations, type Recommendation, type RecommendationType } from '../../../mocks/dashboard.mock'

/** Mesmo ícone + cor usados em Trilhas para os mesmos temas (shield/cloud/lock), por consistência entre páginas. */
const thumbnailConfig: Record<Recommendation['thumbnail'], { icon: LucideIcon; tile: string; iconClass: string }> = {
  seguranca: { icon: ShieldCheck, tile: 'border-indigo-100 bg-indigo-50', iconClass: 'bg-indigo-600 text-white' },
  nuvem: { icon: CloudCog, tile: 'border-orange-100 bg-orange-50', iconClass: 'bg-orange-500 text-white' },
  dados: { icon: Fingerprint, tile: 'border-teal-100 bg-teal-50', iconClass: 'bg-teal-600 text-white' },
}

const typeBadgeClasses: Record<RecommendationType, string> = {
  CURSO: 'border-blue-100 bg-blue-50 text-blue-600',
  TRILHA: 'border-violet-100 bg-violet-50 text-violet-600',
}

const levelIcons = { Iniciante: SignalLow, Intermediário: SignalMedium, Avançado: SignalHigh }

export default function RecommendationsCard() {
  return (
    <section className="flex flex-col gap-4 rounded-[22px] border border-ink-200/70 bg-white p-5 shadow-[0_12px_34px_-24px_rgba(15,23,42,0.4)] sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[18px] font-extrabold tracking-[-0.015em] text-ink-900">Recomendações para você</h2>
        <button
          type="button"
          className="group flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-[13px] font-bold text-brand-blue-600 transition-colors duration-150 hover:bg-blue-50 hover:text-brand-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          Ver todas
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>

      <ul className="flex flex-col divide-y divide-ink-100">
        {recommendations.map((item) => {
          const { icon: Icon, tile, iconClass } = thumbnailConfig[item.thumbnail]
          const LevelIcon = levelIcons[item.level]
          return (
            <li key={item.id} className="first:[&>button]:pt-0 last:[&>button]:pb-0">
              <button
                type="button"
                className="group -mx-2 flex w-full items-center gap-3 rounded-xl px-2 py-3.5 text-left transition-[background-color,transform] duration-150 hover:translate-x-0.5 hover:bg-ink-100/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-brand-blue-400 motion-reduce:transform-none"
              >
                <span className={`relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${tile}`}>
                  <span className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-white/70" aria-hidden="true" />
                  <span className={`relative flex h-9 w-9 items-center justify-center rounded-xl shadow-sm ${iconClass}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span className="line-clamp-2 text-[14px] font-bold leading-snug text-ink-900">{item.title}</span>
                  <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-semibold text-ink-500">
                    <span className={`rounded-md border px-1.5 py-0.5 text-[9px] font-extrabold tracking-wide ${typeBadgeClasses[item.type]}`}>
                      {item.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <LevelIcon className="h-3.5 w-3.5 text-ink-400" strokeWidth={2} aria-hidden="true" />
                      {item.level}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock3 className="h-3.5 w-3.5 text-ink-400" strokeWidth={2} aria-hidden="true" />
                      {item.durationHours}h
                    </span>
                  </span>
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200/80 bg-white text-ink-400 transition-[transform,background-color,border-color,color] duration-200 group-hover:translate-x-0.5 group-hover:border-brand-blue-200 group-hover:bg-blue-50 group-hover:text-brand-blue-600">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
