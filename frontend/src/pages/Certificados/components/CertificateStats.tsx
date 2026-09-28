import { ArrowUpRight, Award, Clock3, Download, ShieldCheck } from 'lucide-react'
import type { certificateSummary } from '../certificates'

type Props = {
  summary: ReturnType<typeof certificateSummary>
  downloads: number
  onSelect: (action: 'completed' | 'in_progress' | 'hours' | 'history') => void
}

export default function CertificateStats({ summary, downloads, onSelect }: Props) {
  const items = [
    {
      label: 'Certificados conquistados',
      value: summary.completed,
      action: 'completed',
      link: 'Ver todos',
      icon: Award,
      color: 'border-violet-400/20 bg-violet-400/10 text-violet-300',
    },
    {
      label: 'Em andamento',
      value: summary.ongoing,
      action: 'in_progress',
      link: 'Acompanhar progresso',
      icon: ShieldCheck,
      color: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
    },
    {
      label: 'Horas certificadas',
      value: `${summary.hours}h`,
      action: 'hours',
      link: 'Ver detalhes',
      icon: Clock3,
      color: 'border-orange-400/20 bg-orange-400/10 text-orange-300',
    },
    {
      label: 'Total de downloads',
      value: downloads,
      action: 'history',
      link: 'Ver histórico',
      icon: Download,
      color: 'border-brand-blue-400/20 bg-brand-blue-400/10 text-brand-blue-400',
    },
  ] as const
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      aria-label="Resumo dos certificados"
    >
      {items.map(({ label, value, action, link, icon: Icon, color }) => (
        <button
          key={action}
          type="button"
          onClick={() => onSelect(action)}
          className="group flex min-w-0 flex-col gap-4 rounded-[20px] border border-ink-200/70 bg-panel p-5 text-left shadow-card transition-colors hover:border-brand-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400"
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
            {link}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </button>
      ))}
    </div>
  )
}
