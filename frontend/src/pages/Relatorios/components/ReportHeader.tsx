import { BarChart3, CalendarDays, SlidersHorizontal } from 'lucide-react'
import { periodDates, periodLabels, type ReportPeriod } from '../report'

export default function ReportHeader({
  period,
  onPeriodChange,
  filtersOpen,
  onToggleFilters,
}: {
  period: ReportPeriod
  onPeriodChange: (value: ReportPeriod) => void
  filtersOpen: boolean
  onToggleFilters: () => void
}) {
  return (
    <section className="relative isolate overflow-hidden rounded-[24px] border border-brand-blue-500/20 bg-gradient-to-br from-navy-800 via-panel to-navy-700 px-6 py-8 shadow-card sm:px-8 lg:px-10">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full border-[34px] border-brand-blue-500/5"
      />
      <div className="relative flex flex-wrap items-end justify-between gap-6">
        <div className="flex min-w-0 flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue-500/20 bg-brand-blue-500/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.11em] text-brand-blue-400">
            <BarChart3 className="h-3.5 w-3.5 text-brand-cyan-400" aria-hidden="true" /> Sua jornada
            em números
          </span>
          <h1 className="text-[31px] font-extrabold leading-[1.12] tracking-[-0.025em] text-ink-900 sm:text-[34px] lg:text-[36px]">
            Relatórios
          </h1>
          <p className="text-[15px] leading-7 text-ink-500 sm:text-base">
            Acompanhe seu desempenho e evolução como aprendiz.
          </p>
        </div>
        <div className="flex w-full flex-wrap items-end gap-3 lg:w-auto">
          <label className="flex min-w-0 flex-1 flex-col gap-1.5 text-[11px] font-semibold text-ink-500 sm:flex-none">
            Período
            <span className="flex min-h-11 items-center gap-2 rounded-xl border border-ink-200 bg-panel-alt px-3 focus-within:ring-2 focus-within:ring-brand-blue-400">
              <CalendarDays className="h-4 w-4 shrink-0 text-brand-blue-400" aria-hidden="true" />
              <select
                aria-label="Período do relatório"
                value={period}
                onChange={(event) => onPeriodChange(event.target.value as ReportPeriod)}
                className="min-w-0 flex-1 bg-transparent py-2 text-xs font-semibold text-ink-700 outline-none sm:flex-none"
              >
                {(Object.keys(periodLabels) as ReportPeriod[]).map((key) => (
                  <option key={key} value={key}>
                    {periodLabels[key]}
                  </option>
                ))}
              </select>
            </span>
          </label>
          <button
            type="button"
            onClick={onToggleFilters}
            aria-expanded={filtersOpen}
            aria-controls="report-filters"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-ink-200 bg-panel-alt px-4 py-2.5 text-xs font-bold text-ink-700 hover:border-brand-blue-500/40 hover:text-brand-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400"
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            Filtros
          </button>
        </div>
      </div>
      <p className="relative mt-3 text-xs text-ink-500 lg:text-right">{periodDates[period]}</p>
    </section>
  )
}
