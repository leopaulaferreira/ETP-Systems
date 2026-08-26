import { ShieldCheck, Flame, Compass, type LucideIcon } from 'lucide-react'
import { achievements, type Achievement } from '../../../mocks/dashboard.mock'

const badgeConfig: Record<Achievement['badge'], { icon: LucideIcon; className: string }> = {
  defensor: { icon: ShieldCheck, className: 'bg-blue-50 text-blue-600' },
  sequencia: { icon: Flame, className: 'bg-amber-50 text-amber-600' },
  explorador: { icon: Compass, className: 'bg-violet-50 text-violet-600' },
}

export default function RecentAchievementsCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-ink-200/60 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-ink-900">Conquistas recentes</h2>
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-blue-600 transition-colors duration-150 hover:text-brand-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          Ver todas
        </button>
      </div>

      <ul className="flex flex-col divide-y divide-ink-100">
        {achievements.map((achievement) => {
          const { icon: Icon, className } = badgeConfig[achievement.badge]
          return (
            <li key={achievement.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${className}`}>
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-sm font-semibold text-ink-900">{achievement.title}</span>
                <span className="truncate text-xs text-ink-500">{achievement.description}</span>
              </span>
              <span className="shrink-0 text-xs text-ink-400">{achievement.status}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
