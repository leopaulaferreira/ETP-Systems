import { currentUser } from './user.mock'

/** Recorte demonstrativo de 2024. Sem sincronização com as outras telas ou API. */
export const reportMonths = [
  { month: 1, label: 'Jan', certificates: 0, courses: 1, hours: 4, trails: 0 },
  { month: 2, label: 'Fev', certificates: 1, courses: 1, hours: 4, trails: 0 },
  { month: 3, label: 'Mar', certificates: 0, courses: 1, hours: 4, trails: 1 },
  { month: 4, label: 'Abr', certificates: 1, courses: 1, hours: 4, trails: 0 },
  { month: 5, label: 'Mai', certificates: 1, courses: 1, hours: 4, trails: 0 },
  { month: 6, label: 'Jun', certificates: 0, courses: 1, hours: 4, trails: 0 },
  { month: 7, label: 'Jul', certificates: 1, courses: 1, hours: 4, trails: 1 },
  { month: 8, label: 'Ago', certificates: 1, courses: 1, hours: 4, trails: 0 },
  { month: 9, label: 'Set', certificates: 0, courses: 1, hours: 4, trails: 0 },
  { month: 10, label: 'Out', certificates: 1, courses: 1, hours: 4, trails: 0 },
  { month: 11, label: 'Nov', certificates: 0, courses: 1, hours: 4, trails: 0 },
  { month: 12, label: 'Dez', certificates: 1, courses: 1, hours: 4, trails: 1 },
] as const

export type ReportTrail =
  'Cibersegurança' | 'LGPD' | 'Computação em Nuvem' | 'Proteção de Dados' | 'Criptografia'

export const reportCertificates: { month: number; trail: ReportTrail }[] = [
  { month: 2, trail: 'Cibersegurança' },
  { month: 4, trail: 'LGPD' },
  { month: 5, trail: 'LGPD' },
  { month: 7, trail: 'Cibersegurança' },
  { month: 8, trail: 'Computação em Nuvem' },
  { month: 10, trail: 'Proteção de Dados' },
  { month: 12, trail: 'Criptografia' },
]

export const reportCourseStatus = [
  {
    label: 'Concluídos',
    count: 12,
    color: 'var(--color-emerald-500, #10b981)',
    dot: 'bg-emerald-500',
  },
  {
    label: 'Em andamento',
    count: 4,
    color: 'var(--color-brand-blue-600)',
    dot: 'bg-brand-blue-600',
  },
  { label: 'Não iniciados', count: 3, color: '#f97316', dot: 'bg-orange-500' },
  { label: 'Atrasados', count: 1, color: '#8b5cf6', dot: 'bg-violet-500' },
]

export const reportRanking = [
  { name: currentUser.name, certificates: 7, hours: 48 },
  { name: 'Mariana Costa', certificates: 6, hours: 42 },
  { name: 'Lucas Martins', certificates: 5, hours: 35 },
  { name: 'Beatriz Lima', certificates: 4, hours: 30 },
  { name: 'Gabriel Souza', certificates: 4, hours: 28 },
  { name: 'Ana Oliveira', certificates: 3, hours: 24 },
  { name: 'Pedro Santos', certificates: 3, hours: 22 },
]

export const reportPopularCourses = [
  { title: 'Fundamentos de LGPD', students: 128, icon: 'governance' },
  { title: 'Trilha de Cibersegurança', students: 112, icon: 'security' },
  { title: 'Computação em Nuvem: Conceitos e Aplicações', students: 94, icon: 'cloud' },
  { title: 'Proteção de Dados Pessoais', students: 76, icon: 'security' },
  { title: 'Introdução à Criptografia', students: 68, icon: 'security' },
] as const
