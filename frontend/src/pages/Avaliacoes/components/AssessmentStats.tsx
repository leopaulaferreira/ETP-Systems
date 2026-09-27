import {
  ArrowUpRight,
  ChartNoAxesCombined,
  CheckCheck,
  ClipboardList,
  Timer,
  type LucideIcon,
} from 'lucide-react'
import type { AssessmentStatus } from '../../../types/assessment'
import type { assessmentSummary } from '../assessment'

type AssessmentStatsProps = {
  summary: ReturnType<typeof assessmentSummary>
  selectedStatus: 'all' | AssessmentStatus
  onSelect: (status: AssessmentStatus) => void
  onViewPerformance: () => void
}

export default function AssessmentStats({
  summary,
  selectedStatus,
  onSelect,
  onViewPerformance,
}: AssessmentStatsProps) {
  const items: {
    label: string
    value: string
    action: string
    icon: LucideIcon
    color: string
    selected: boolean
    onClick: () => void
  }[] = [
    {
      label: 'Pendentes',
      value: String(summary.pending),
      action: 'Começar uma avaliação',
      icon: ClipboardList,
      color: 'border-violet-400/20 bg-violet-400/10 text-violet-300',
      selected: selectedStatus === 'pending',
      onClick: () => onSelect('pending'),
    },
    {
      label: 'Em andamento',
      value: String(summary.ongoing),
      action: 'Retomar de onde parei',
      icon: Timer,
      color: 'border-blue-400/20 bg-blue-400/10 text-blue-300',
      selected: selectedStatus === 'in_progress',
      onClick: () => onSelect('in_progress'),
    },
    {
      label: 'Concluídas',
      value: String(summary.completed),
      action: 'Consultar resultados',
      icon: CheckCheck,
      color: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
      selected: selectedStatus === 'completed',
      onClick: () => onSelect('completed'),
    },
    {
      label: 'Nota média',
      value: summary.average === null ? '—' : `${summary.average}%`,
      action: 'Acompanhar evolução',
      icon: ChartNoAxesCombined,
      color: 'border-orange-400/20 bg-orange-400/10 text-orange-300',
      selected: false,
      onClick: onViewPerformance,
    },
  ]
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      aria-label="Resumo das avaliações"
    >
      {items.map(({ label, value, action, icon: Icon, color, selected, onClick }) => (
        <button
          key={label}
          type="button"
          onClick={onClick}
          aria-label={`${label}: ${value}. ${action}`}
          className={`group flex min-w-0 flex-col gap-4 rounded-[20px] border bg-panel p-5 text-left shadow-card transition-colors hover:border-brand-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400 ${selected ? 'border-brand-blue-500/60' : 'border-ink-200/70'}`}
        >
          <span className="flex items-center gap-4">
            <span
              className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border ${color}`}
            >
              <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-ink-500">{label}</span>
              <span className="text-[30px] font-extrabold leading-none tracking-tight text-ink-900">
                {value}
              </span>
            </span>
          </span>
          <span className="flex items-center justify-between gap-2 border-t border-ink-100 pt-3 text-[11px] font-bold text-brand-blue-400">
            {action}
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </span>
        </button>
      ))}
    </div>
  )
}
