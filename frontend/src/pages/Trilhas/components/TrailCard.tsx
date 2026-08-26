import {
  CloudCog,
  UsersRound,
  ChartNoAxesCombined,
  ShieldCheck,
  GitBranch,
  BrainCircuit,
  Fingerprint,
  Workflow,
  BookOpenText,
  Clock3,
  ArrowUpRight,
  SignalLow,
  SignalMedium,
  SignalHigh,
  type LucideIcon,
} from 'lucide-react'
import { type LearningPath, type LearningPathIconKey, type LearningPathLevel } from '../../../mocks/trilhas.mock'

const iconConfig: Record<LearningPathIconKey, { icon: LucideIcon; tileClass: string; iconClass: string }> = {
  cloud: { icon: CloudCog, tileClass: 'border-orange-100 bg-orange-50', iconClass: 'bg-orange-500 text-white' },
  users: { icon: UsersRound, tileClass: 'border-emerald-100 bg-emerald-50', iconClass: 'bg-emerald-500 text-white' },
  data: { icon: ChartNoAxesCombined, tileClass: 'border-blue-100 bg-blue-50', iconClass: 'bg-blue-600 text-white' },
  shield: { icon: ShieldCheck, tileClass: 'border-indigo-100 bg-indigo-50', iconClass: 'bg-indigo-600 text-white' },
  devops: { icon: GitBranch, tileClass: 'border-sky-100 bg-sky-50', iconClass: 'bg-sky-500 text-white' },
  ai: { icon: BrainCircuit, tileClass: 'border-violet-100 bg-violet-50', iconClass: 'bg-violet-600 text-white' },
  lock: { icon: Fingerprint, tileClass: 'border-teal-100 bg-teal-50', iconClass: 'bg-teal-600 text-white' },
  productivity: { icon: Workflow, tileClass: 'border-rose-100 bg-rose-50', iconClass: 'bg-rose-500 text-white' },
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
  const { icon: Icon, tileClass, iconClass } = iconConfig[path.icon]
  const LevelIcon = levelIcons[path.level]

  return (
    <button
      type="button"
      className="group relative flex min-h-[204px] w-full overflow-hidden rounded-[20px] border border-ink-200/70 bg-white p-5 text-left shadow-[0_8px_24px_-20px_rgba(15,23,42,0.4)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-brand-blue-300/70 hover:shadow-[0_20px_38px_-22px_rgba(37,99,235,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/35 focus-visible:ring-offset-2 motion-reduce:transform-none"
    >
      <div className="flex h-full w-full flex-col">
        <div className="flex items-start gap-3.5">
          <span
            className={`relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border ${tileClass}`}
          >
            <span className="absolute -right-3 -top-3 h-9 w-9 rounded-full bg-white/70" aria-hidden="true" />
            <span className={`relative flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ${iconClass}`}>
              <Icon className="h-[22px] w-[22px]" strokeWidth={1.9} aria-hidden="true" />
            </span>
          </span>
          <div className="flex min-w-0 flex-1 flex-col gap-1.5 pt-0.5">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.105em] text-brand-blue-600/80">
              {path.category}
            </span>
            <h3 className="text-[16px] font-extrabold leading-[1.35] tracking-[-0.012em] text-ink-900">
              {path.title}
            </h3>
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-500">
              <LevelIcon className="h-3.5 w-3.5 text-ink-400" strokeWidth={2} aria-hidden="true" />
              {path.level}
            </span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-ink-100/90 pt-3.5">
          <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[11px] font-semibold text-ink-500">
            <span className="flex items-center gap-1.5">
              <BookOpenText className="h-3.5 w-3.5 text-ink-400" strokeWidth={2} aria-hidden="true" />
              {path.courseCount} cursos
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5 text-ink-400" strokeWidth={2} aria-hidden="true" />
              {path.durationHours}h
            </span>
          </div>
          <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200/80 bg-white text-ink-400 transition-[transform,background-color,border-color,color] duration-200 group-hover:translate-x-0.5 group-hover:border-brand-blue-200 group-hover:bg-blue-50 group-hover:text-brand-blue-600">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
          </span>
        </div>
      </div>
    </button>
  )
}
