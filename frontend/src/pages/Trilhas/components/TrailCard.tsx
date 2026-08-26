import {
  Cloud,
  Users,
  BarChart3,
  ShieldCheck,
  Infinity as InfinityIcon,
  Brain,
  Lock,
  Zap,
  Layers,
  Clock,
  ChevronRight,
  SignalLow,
  SignalMedium,
  SignalHigh,
  type LucideIcon,
} from 'lucide-react'
import { type LearningPath, type LearningPathIconKey, type LearningPathLevel } from '../../../mocks/trilhas.mock'

const iconConfig: Record<LearningPathIconKey, { icon: LucideIcon; className: string }> = {
  cloud: { icon: Cloud, className: 'bg-orange-500' },
  users: { icon: Users, className: 'bg-emerald-500' },
  data: { icon: BarChart3, className: 'bg-blue-500' },
  shield: { icon: ShieldCheck, className: 'bg-indigo-600' },
  devops: { icon: InfinityIcon, className: 'bg-sky-500' },
  ai: { icon: Brain, className: 'bg-violet-500' },
  lock: { icon: Lock, className: 'bg-teal-500' },
  productivity: { icon: Zap, className: 'bg-rose-500' },
}

export const levelIcons: Record<LearningPathLevel, LucideIcon> = {
  Iniciante: SignalLow,
  Intermediário: SignalMedium,
  Avançado: SignalHigh,
}

type TrailCardProps = {
  path: LearningPath
}

export default function TrailCard({ path }: TrailCardProps) {
  const { icon: Icon, className } = iconConfig[path.icon]
  const LevelIcon = levelIcons[path.level]

  return (
    <button
      type="button"
      className="group flex h-full flex-col gap-4 rounded-2xl border border-ink-200/60 bg-white p-5 text-left shadow-card transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-brand-blue-300/60 hover:shadow-[0_16px_36px_-16px_rgba(37,99,235,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
    >
      <div className="flex items-start gap-3">
        <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white ${className}`}>
          <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1 pt-0.5">
          <h3 className="text-[15px] font-bold leading-snug text-ink-900">{path.title}</h3>
          <span className="flex items-center gap-1 text-xs font-medium text-ink-500">
            <LevelIcon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            {path.level}
          </span>
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-ink-100 pt-3">
        <div className="flex items-center gap-4 text-xs text-ink-500">
          <span className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            {path.courseCount} cursos
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            {path.durationHours}h
          </span>
        </div>
        <ChevronRight
          className="h-4 w-4 shrink-0 text-ink-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-blue-600"
          strokeWidth={2}
          aria-hidden="true"
        />
      </div>
    </button>
  )
}
