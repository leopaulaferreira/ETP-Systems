import { periodDates } from './report.ts'
import type { ReturnTypeReport } from './reportTypes'

export function buildReportCsv(data: ReturnTypeReport): string {
  const scope = [periodDates[data.period], data.trail === 'all' ? 'Todas as trilhas' : data.trail]
  const rows: (string | number)[][] = [
    [
      'Período',
      'Trilha dos certificados',
      'Mês',
      'Certificados emitidos',
      'Certificados acumulados',
      'Cursos concluídos (todas as trilhas)',
      'Horas estudadas (todas as trilhas)',
      'Trilhas concluídas (todas as trilhas)',
    ],
    ...data.evolution.map((month) => [
      ...scope,
      `${month.label}/2024`,
      month.certificates,
      month.value,
      month.courses,
      month.hours,
      month.trails,
    ]),
    [
      ...scope,
      'Total do período',
      data.summary.certificates,
      data.summary.certificates,
      data.summary.courses,
      data.summary.hours,
      data.summary.trails,
    ],
  ]
  return (
    '\uFEFF' +
    rows
      .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(';'))
      .join('\r\n')
  )
}

export function downloadReportCsv(data: ReturnTypeReport) {
  const blob = new Blob([buildReportCsv(data)], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `etp-relatorio-2024-${data.period}.csv`
  try {
    document.body.append(anchor)
    anchor.click()
  } finally {
    anchor.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
}
