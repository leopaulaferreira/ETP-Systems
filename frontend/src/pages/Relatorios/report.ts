import { reportCertificates, reportMonths, type ReportTrail } from '../../mocks/relatorios.mock.ts'

export type ReportPeriod = 'year' | 'first-half' | 'second-half'
export type ReportTrailFilter = 'all' | ReportTrail

export const periodLabels: Record<ReportPeriod, string> = {
  year: 'Ano de 2024',
  'first-half': '1º semestre de 2024',
  'second-half': '2º semestre de 2024',
}

export const periodDates: Record<ReportPeriod, string> = {
  year: '01/01/2024 – 31/12/2024',
  'first-half': '01/01/2024 – 30/06/2024',
  'second-half': '01/07/2024 – 31/12/2024',
}

export function selectReport(period: ReportPeriod, trail: ReportTrailFilter) {
  const months = reportMonths.filter(
    (item) => period === 'year' || (period === 'first-half' ? item.month <= 6 : item.month >= 7),
  )
  const certificates = reportCertificates.filter(
    (item) =>
      months.some((month) => month.month === item.month) &&
      (trail === 'all' || item.trail === trail),
  )
  const certificateCounts = months.map(
    (month) => certificates.filter((item) => item.month === month.month).length,
  )
  let accumulated = 0
  const evolution = months.map((month, index) => ({
    ...month,
    certificates: certificateCounts[index],
    value: (accumulated += certificateCounts[index]),
  }))
  const total = <K extends 'courses' | 'hours' | 'trails'>(key: K) =>
    months.reduce((sum, month) => sum + month[key], 0)
  const byTrail = [...new Set(reportCertificates.map((item) => item.trail))]
    .map((name) => ({ name, count: certificates.filter((item) => item.trail === name).length }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'pt-BR'))

  return {
    period,
    trail,
    months,
    evolution,
    byTrail,
    summary: {
      certificates: certificates.length,
      courses: trail === 'all' ? total('courses') : null,
      hours: trail === 'all' ? total('hours') : null,
      trails: trail === 'all' ? total('trails') : null,
    },
  }
}
