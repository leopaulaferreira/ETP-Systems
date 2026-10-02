import { Award, BookCheck, Clock3, Route, type LucideIcon } from 'lucide-react'
import type { ReturnTypeReport } from '../reportTypes'

const items: {
  key: keyof ReturnTypeReport['summary']
  label: string
  suffix: string
  icon: LucideIcon
  accent: string
}[] = [
  {
    key: 'certificates',
    label: 'Certificados emitidos',
    suffix: '',
    icon: Award,
    accent: 'border-violet-400/20 bg-violet-400/10 text-violet-300',
  },
  {
    key: 'courses',
    label: 'Cursos concluídos',
    suffix: '',
    icon: BookCheck,
    accent: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
  },
  {
    key: 'hours',
    label: 'Horas estudadas',
    suffix: 'h',
    icon: Clock3,
    accent: 'border-orange-400/20 bg-orange-400/10 text-orange-300',
  },
  {
    key: 'trails',
    label: 'Trilhas concluídas',
    suffix: '',
    icon: Route,
    accent: 'border-brand-blue-400/20 bg-brand-blue-400/10 text-brand-blue-400',
  },
]

export default function ReportStats({ summary }: { summary: ReturnTypeReport['summary'] }) {
  return (
    <section
      aria-label="Indicadores do período"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {items.map(({ key, label, suffix, icon: Icon, accent }) => (
        <div
          key={key}
          className="flex min-w-0 items-center gap-4 rounded-[20px] border border-ink-200/70 bg-panel p-5 shadow-card"
        >
          <span
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${accent}`}
          >
            <Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-col gap-1">
            <span className="text-xs font-semibold text-ink-500">{label}</span>
            <strong className="text-[30px] font-extrabold leading-none tracking-tight text-ink-900">
              {summary[key] === null ? '—' : `${summary[key]}${suffix}`}
            </strong>
          </span>
        </div>
      ))}
    </section>
  )
}
