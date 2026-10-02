import { useId, useState } from 'react'
import { Award, TrendingUp } from 'lucide-react'
import type { ReturnTypeReport } from '../reportTypes'
import ReportPanel from './ReportPanel'

export default function ReportCharts({
  data,
  onDetails,
}: {
  data: ReturnTypeReport
  onDetails: (kind: 'evolution' | 'trails') => void
}) {
  const [mode, setMode] = useState<'cumulative' | 'monthly'>('cumulative')
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null)
  const gradientId = useId()
  const maximum = Math.max(
    4,
    Math.ceil(
      Math.max(
        ...data.evolution.map((item) => (mode === 'cumulative' ? item.value : item.certificates)),
      ) / 4,
    ) * 4,
  )
  const points = data.evolution.map((item, index) => {
    const value = mode === 'cumulative' ? item.value : item.certificates
    return {
      ...item,
      plotted: value,
      x: 28 + (index * 544) / Math.max(1, data.evolution.length - 1),
      y: 194 - (value / maximum) * 154,
    }
  })
  const selected = points.find((point) => point.month === selectedMonth) ?? points.at(-1)!
  const line = points.map(({ x, y }) => `${x},${y}`).join(' ')
  const area = `M ${points[0].x} 194 L ${points.map(({ x, y }) => `${x} ${y}`).join(' L ')} L ${points.at(-1)!.x} 194 Z`
  const distributionColors = [
    'bg-brand-blue-500',
    'bg-brand-cyan-400',
    'bg-violet-400',
    'bg-emerald-400',
    'bg-orange-400',
  ]
  return (
    <div className="grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
      <ReportPanel
        title="Evolução de certificados"
        eyebrow="Suas conquistas ao longo do tempo"
        onDetails={() => onDetails('evolution')}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-6">
          <div>
            <p className="text-[11px] font-semibold text-ink-500">{selected.label} / 2024</p>
            <p className="mt-1 flex items-baseline gap-2">
              <strong className="text-3xl font-extrabold tracking-tight text-ink-900">
                {selected.plotted}
              </strong>
              <span className="text-[11px] text-ink-500">
                {mode === 'cumulative' ? 'acumulados no período' : 'emitidos no mês'}
              </span>
            </p>
          </div>
          <div
            role="group"
            aria-label="Visualização da evolução"
            className="inline-flex rounded-xl border border-ink-200/70 bg-surface-alt p-1"
          >
            {(['cumulative', 'monthly'] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={mode === value}
                onClick={() => setMode(value)}
                className={`min-h-8 rounded-lg px-3 text-[11px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400 ${mode === value ? 'bg-panel-alt text-brand-blue-400 shadow-sm' : 'text-ink-500 hover:text-ink-700'}`}
              >
                {value === 'cumulative' ? 'Acumulado' : 'Mensal'}
              </button>
            ))}
          </div>
        </div>
        <label className="mx-5 mt-4 flex items-center justify-between gap-3 text-[11px] text-ink-500 sm:hidden">
          Mês em destaque
          <select
            value={selected.month}
            onChange={(event) => setSelectedMonth(Number(event.target.value))}
            className="min-h-10 rounded-xl border border-ink-200 bg-panel-alt px-3 text-xs font-semibold text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400"
          >
            {points.map((point) => (
              <option key={point.month} value={point.month}>
                {point.label} / 2024
              </option>
            ))}
          </select>
        </label>
        <div className="mt-3 px-3 sm:px-5">
          <svg
            viewBox="0 0 600 240"
            className="w-full overflow-visible"
            role="group"
            aria-label={`Evolução de certificados ${mode === 'cumulative' ? 'acumulados' : 'por mês'}. Selecione um mês para ver o valor.`}
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-brand-blue-500)" stopOpacity="0.26" />
                <stop offset="100%" stopColor="var(--color-brand-blue-500)" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3, 4].map((tick) => {
              const value = (tick * maximum) / 4
              const y = 194 - (value / maximum) * 154
              return (
                <g key={tick} aria-hidden="true">
                  <line
                    x1="28"
                    x2="572"
                    y1={y}
                    y2={y}
                    stroke="var(--color-ink-200)"
                    strokeDasharray="3 5"
                    opacity="0.75"
                  />
                  <text x="6" y={y + 4} fill="var(--color-ink-500)" fontSize="12">
                    {value}
                  </text>
                </g>
              )
            })}
            <path d={area} fill={`url(#${gradientId})`} />
            <polyline
              points={line}
              fill="none"
              stroke="var(--color-brand-blue-400)"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <line
              x1={selected.x}
              x2={selected.x}
              y1="30"
              y2="194"
              stroke="var(--color-brand-cyan-400)"
              strokeDasharray="3 5"
              opacity="0.35"
            />
            {points.map((point, index) => (
              <g
                key={point.month}
                role="button"
                tabIndex={0}
                aria-label={`${point.label} de 2024: ${point.plotted} certificados ${mode === 'cumulative' ? 'acumulados' : 'emitidos'}`}
                aria-pressed={selected.month === point.month}
                onFocus={() => setSelectedMonth(point.month)}
                onMouseEnter={() => setSelectedMonth(point.month)}
                onClick={() => setSelectedMonth(point.month)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setSelectedMonth(point.month)
                  }
                }}
                className="cursor-pointer outline-none [&:focus-visible>circle:first-of-type]:stroke-brand-cyan-400"
              >
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="15"
                  fill="transparent"
                  stroke="transparent"
                  strokeWidth="2"
                />
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={selected.month === point.month ? 8 : 4}
                  fill={
                    selected.month === point.month
                      ? 'var(--color-brand-cyan-400)'
                      : 'var(--color-brand-blue-400)'
                  }
                  stroke="var(--color-panel)"
                  strokeWidth="3"
                />
                <text
                  aria-hidden="true"
                  x={point.x}
                  y="226"
                  textAnchor="middle"
                  fill={
                    selected.month === point.month ? 'var(--color-ink-900)' : 'var(--color-ink-500)'
                  }
                  fontSize="13"
                  className={
                    index % 3 !== 0 && index !== points.length - 1 ? 'hidden sm:block' : ''
                  }
                >
                  {point.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="mt-auto flex items-center gap-2 border-t border-ink-100 px-5 py-4 text-[11px] text-ink-500 sm:px-6">
          <TrendingUp className="h-4 w-4 shrink-0 text-brand-cyan-400" aria-hidden="true" />
          <span>
            <strong className="font-bold text-ink-700">
              {data.summary.certificates} certificados
            </strong>{' '}
            emitidos em {data.months.length} meses. Selecione um ponto para explorar.
          </span>
        </div>
      </ReportPanel>
      <ReportPanel
        title="Certificados por trilha"
        eyebrow="Distribuição do aprendizado"
        onDetails={() => onDetails('trails')}
      >
        {data.byTrail.length ? (
          <div className="flex flex-1 flex-col gap-5 px-5 pb-6 sm:px-6">
            {data.byTrail.map((item, index) => (
              <div key={item.name}>
                <div className="mb-2 flex items-center gap-2 text-xs">
                  <span className="flex-1 font-semibold text-ink-700">{item.name}</span>
                  <strong className="text-ink-900">{item.count}</strong>
                  <span className="w-9 text-right text-[10px] text-ink-500">
                    {Math.round((item.count / data.summary.certificates) * 100)}%
                  </span>
                </div>
                <div
                  role="meter"
                  aria-label={`Certificados em ${item.name}`}
                  aria-valuemin={0}
                  aria-valuemax={data.summary.certificates}
                  aria-valuenow={item.count}
                  className="h-2 overflow-hidden rounded-full bg-ink-100"
                >
                  <span
                    className={`block h-full rounded-full ${distributionColors[index % distributionColors.length]}`}
                    style={{ width: `${(item.count / data.summary.certificates) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center">
            <Award className="h-9 w-9 text-ink-400" aria-hidden="true" />
            <p className="text-sm font-bold text-ink-700">Nenhum certificado neste recorte</p>
            <p className="text-xs leading-5 text-ink-500">
              Experimente outro período ou remova o filtro de trilha.
            </p>
          </div>
        )}
        <div className="flex items-center justify-between gap-3 border-t border-ink-100 px-5 py-4 text-[11px] text-ink-500 sm:px-6">
          <span>Trilhas com certificados</span>
          <strong className="text-ink-700">{data.byTrail.length}</strong>
        </div>
      </ReportPanel>
    </div>
  )
}
