import { Award, Download } from 'lucide-react'
import { recentCertificates } from '../../../mocks/dashboard.mock'

export default function RecentCertificatesCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-ink-200/60 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-ink-900">Certificados recentes</h2>
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-blue-600 transition-colors duration-150 hover:text-brand-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          Ver todos
        </button>
      </div>

      <ul className="flex flex-col divide-y divide-ink-100">
        {recentCertificates.map((certificate) => (
          <li key={certificate.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            {/* Miniatura simplificada — geração do certificado completo fica para uma etapa futura */}
            <span
              aria-hidden="true"
              className="flex h-11 w-9 shrink-0 items-center justify-center rounded-md border border-ink-200 bg-surface-alt text-brand-blue-600"
            >
              <Award className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-semibold text-ink-900">{certificate.title}</span>
              <span className="text-xs text-ink-500">Concluído em {certificate.completedAt}</span>
            </span>
            <button
              type="button"
              aria-label={`Baixar certificado ${certificate.title}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-500 transition-colors duration-150 hover:bg-ink-100 hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
            >
              <Download className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
