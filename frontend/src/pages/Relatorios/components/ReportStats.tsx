import IllustratedIcon, { type IconTone } from '../../../components/ui/IllustratedIcon'
import { Award, BookCheck, Clock3, Route, type LucideIcon } from 'lucide-react'
import type { ReturnTypeReport } from '../reportTypes'

const items: {
  key: keyof ReturnTypeReport['summary']
  label: string
  suffix: string
  icon: LucideIcon
  tone: IconTone
  graph: string
}[] = [
  {
    key: 'certificates',
    label: 'Certificados emitidos',
    suffix: '',
    icon: Award,
    tone: 'violet',
    graph: 'text-violet-300',
  },
  {
    key: 'courses',
    label: 'Cursos concluídos',
    suffix: '',
    icon: BookCheck,
    tone: 'emerald',
    graph: 'text-emerald-300',
  },
  {
    key: 'hours',
    label: 'Horas estudadas',
    suffix: 'h',
    icon: Clock3,
    tone: 'orange',
    graph: 'text-orange-300',
  },
  {
    key: 'trails',
    label: 'Trilhas concluídas',
    suffix: '',
    icon: Route,
    tone: 'blue',
    graph: 'text-brand-blue-400',
  },
]

export default function ReportStats({ data }: { data: ReturnTypeReport }) {
  return (
    <section
      aria-label="Indicadores do período"
      className="grid grid-cols-2 gap-3 xl:grid-cols-4 lg:gap-4"
    >
      {items.map(({ key, label, suffix, icon: Icon, tone, graph }) => {
        const series = data.evolution.map((month) => month[key])
        const max = Math.max(1, ...series)
        const activeMonths = series.filter((value) => value > 0).length
        return (
          <div
            key={key}
            className="group relative min-w-0 overflow-hidden rounded-[22px] border border-ink-200/70 bg-gradient-to-br from-panel-alt/70 to-panel p-4 shadow-card transition-colors hover:border-brand-blue-400/30 sm:p-5"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <IllustratedIcon icon={Icon} tone={tone} size="compact" />
              <span className="text-[9px] font-semibold uppercase tracking-wider text-ink-500">
                {data.trail !== 'all' && key === 'certificates' ? 'Nesta trilha' : 'No período'}
              </span>
            </div>
            <p className="min-h-8 text-[11px] font-semibold leading-4 text-ink-500 sm:min-h-0 sm:text-xs">
              {label}
            </p>
            <div className="mt-2 flex items-end justify-between gap-2">
              <strong className="text-[36px] font-extrabold leading-none tracking-[-0.05em] text-ink-900 sm:text-[42px]">
                {data.summary[key]}
                <span className="ml-0.5 text-xl text-ink-500">{suffix}</span>
              </strong>
              <span aria-hidden="true" className={`hidden h-9 items-end gap-1 sm:flex ${graph}`}>
                {series.map((value, index) => (
                  <span
                    key={index}
                    className="w-1 rounded-t-sm bg-current opacity-50"
                    style={{ height: `${Math.max(4, (value / max) * 100)}%` }}
                  />
                ))}
              </span>
            </div>
            <p className="mt-4 border-t border-ink-200/50 pt-3 text-[10px] leading-4 text-ink-500">
              {data.trail !== 'all' && key !== 'certificates'
                ? 'Total de todas as trilhas'
                : `${activeMonths} de ${series.length} meses com atividade`}
            </p>
          </div>
        )
      })}
    </section>
  )
}
