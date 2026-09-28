import type { Certificate } from '../../types/certificate'

export type CertificateFilters = {
  query: string
  status: 'all' | Certificate['status']
  year: string
  order: 'recent' | 'oldest' | 'title'
}

export const initialFilters: CertificateFilters = {
  query: '',
  status: 'all',
  year: 'all',
  order: 'recent',
}
const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

export function selectCertificates(items: Certificate[], filters: CertificateFilters) {
  return items
    .filter(
      (item) =>
        normalize(item.title).includes(normalize(filters.query)) &&
        (filters.status === 'all' || item.status === filters.status) &&
        (filters.year === 'all' || item.issuedAt?.startsWith(`${filters.year}-`)),
    )
    .sort((a, b) => {
      if (filters.order === 'title') return a.title.localeCompare(b.title, 'pt-BR')
      if (!a.issuedAt) return b.issuedAt ? 1 : 0
      if (!b.issuedAt) return -1
      return filters.order === 'oldest'
        ? a.issuedAt.localeCompare(b.issuedAt)
        : b.issuedAt.localeCompare(a.issuedAt)
    })
}

export function certificateSummary(items: Certificate[]) {
  const completed = items.filter((item) => item.status === 'completed')
  return {
    completed: completed.length,
    ongoing: items.length - completed.length,
    hours: completed.reduce((sum, item) => sum + item.hours, 0),
  }
}

export function formatCertificateDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(value))
}
