import { ArrowRight } from 'lucide-react'
import type { ReturnTypeReport } from '../reportTypes'

const panel = 'min-w-0 rounded-[22px] border border-ink-200/70 bg-panel p-5 shadow-card sm:p-6'
const action =
  'inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg px-2 text-xs font-bold text-brand-blue-400 hover:bg-brand-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400'

function ChartHeading({ title, onDetails }: { title: string; onDetails: () => void }) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
      <h2 className="text-base font-extrabold tracking-tight text-ink-900">{title}</h2>
      <button type="button" onClick={onDetails} className={action}>
        Ver detalhes
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}

export default function ReportCharts({
  data,
  onDetails,
}: {
  data: ReturnTypeReport
  onDetails: (kind: 'evolution' | 'trails') => void
}) {
  const points = data.evolution.map((item, index) => ({
    ...item,
    x: data.evolution.length === 1 ? 300 : 38 + (index * 524) / (data.evolution.length - 1),
    y: 180 - item.value * 19,
  }))
  const line = points.map(({ x, y }) => `${x},${y}`).join(' ')
  const area = points.length
    ? `M ${points[0].x} 180 L ${points.map(({ x, y }) => `${x} ${y}`).join(' L ')} L ${points.at(-1)!.x} 180 Z`
    : ''
  const maxBar = Math.max(1, ...data.byTrail.map((item) => item.count))
  return (
    <div className="grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-2">
      <section className={panel} aria-label="Evolução de certificados emitidos">
        <ChartHeading
          title="Evolução de certificados emitidos"
          onDetails={() => onDetails('evolution')}
        />
        <div className="overflow-x-auto">
          <svg
            viewBox="0 0 600 235"
            className="min-w-[440px] w-full"
            role="img"
            aria-label={`Certificados acumulados por mês: ${points.map(({ label, value }) => `${label}: ${value}`).join('; ')}`}
          >
            {[0, 2, 4, 6, 8].map((value) => {
              const y = 180 - value * 19
              return (
                <g key={value}>
                  <line
                    x1="38"
                    x2="574"
                    y1={y}
                    y2={y}
                    stroke="var(--color-ink-200)"
                    strokeDasharray="3 5"
                  />
                  <text x="14" y={y + 4} fill="var(--color-ink-500)" fontSize="11">
                    {value}
                  </text>
                </g>
              )
            })}
            <path d={area} fill="var(--color-brand-blue-500)" opacity="0.1" />
            <polyline
              points={line}
              fill="none"
              stroke="var(--color-brand-blue-400)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {points.map((point) => (
              <g key={point.month}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill="var(--color-brand-blue-500)"
                  stroke="var(--color-panel)"
                  strokeWidth="2"
                />
                <text
                  x={point.x}
                  y={point.y - 10}
                  textAnchor="middle"
                  fill="var(--color-ink-700)"
                  fontSize="10"
                  fontWeight="700"
                >
                  {point.value}
                </text>
                <text
                  x={point.x}
                  y="213"
                  textAnchor="middle"
                  fill="var(--color-ink-500)"
                  fontSize="10"
                >
                  {point.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </section>
      <section className={panel} aria-label="Certificados por trilha">
        <ChartHeading title="Certificados por trilha" onDetails={() => onDetails('trails')} />
        {data.byTrail.length ? (
          <div className="flex min-h-[235px] items-end gap-2 overflow-x-auto border-b border-ink-200 px-1 pb-3 sm:gap-3">
            {data.byTrail.map((item) => (
              <div
                key={item.name}
                className="flex min-w-[76px] flex-1 flex-col items-center justify-end gap-2 text-center"
              >
                <span className="text-xs font-extrabold text-ink-700">{item.count}</span>
                <span
                  aria-hidden="true"
                  className="w-full max-w-16 rounded-t-lg bg-gradient-to-t from-brand-blue-700 to-brand-blue-400"
                  style={{ height: `${Math.max(24, (item.count / maxBar) * 150)}px` }}
                />
                <span className="min-h-9 text-[10px] leading-4 text-ink-500">{item.name}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="flex min-h-[235px] items-center justify-center text-center text-sm text-ink-500">
            Nenhum certificado emitido no filtro selecionado.
          </p>
        )}
      </section>
    </div>
  )
}
