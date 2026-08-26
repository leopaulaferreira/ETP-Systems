/**
 * Dados de exemplo da página Trilhas.
 *
 * O front-end ainda não está integrado a uma API real: todo o conteúdo abaixo
 * é estático/fictício e serve apenas para viabilizar a construção da tela.
 * Ao integrar com o backend, os tipos aqui definidos devem orientar o
 * contrato dos endpoints correspondentes.
 */

export const categories = ['Tecnologia', 'Negócios', 'Dados', 'Segurança', 'Produtividade', 'Design'] as const
export type LearningPathCategory = (typeof categories)[number]

export const categoryFilters = ['Todas', ...categories] as const
export type CategoryFilter = (typeof categoryFilters)[number]

export const levels = ['Iniciante', 'Intermediário', 'Avançado'] as const
export type LearningPathLevel = (typeof levels)[number]

export const levelFilters = ['Todos', ...levels] as const
export type LevelFilter = (typeof levelFilters)[number]

export type LearningPathIconKey = 'cloud' | 'users' | 'data' | 'shield' | 'devops' | 'ai' | 'lock' | 'productivity'

export type LearningPath = {
  id: string
  title: string
  category: LearningPathCategory
  level: LearningPathLevel
  courseCount: number
  durationHours: number
  icon: LearningPathIconKey
}

export const learningPaths: LearningPath[] = [
  {
    id: 'cloud-aws',
    title: 'Computação em Nuvem com AWS',
    category: 'Tecnologia',
    level: 'Intermediário',
    courseCount: 10,
    durationHours: 36,
    icon: 'cloud',
  },
  {
    id: 'lideranca-times',
    title: 'Liderança e Gestão de Times',
    category: 'Negócios',
    level: 'Intermediário',
    courseCount: 8,
    durationHours: 24,
    icon: 'users',
  },
  {
    id: 'python-dados',
    title: 'Python para Análise de Dados',
    category: 'Dados',
    level: 'Intermediário',
    courseCount: 9,
    durationHours: 30,
    icon: 'data',
  },
  {
    id: 'fundamentos-ciberseguranca',
    title: 'Fundamentos de Cibersegurança',
    category: 'Segurança',
    level: 'Iniciante',
    courseCount: 7,
    durationHours: 18,
    icon: 'shield',
  },
  {
    id: 'fundamentos-devops',
    title: 'Fundamentos de DevOps',
    category: 'Tecnologia',
    level: 'Intermediário',
    courseCount: 8,
    durationHours: 24,
    icon: 'devops',
  },
  {
    id: 'introducao-ia',
    title: 'Introdução à Inteligência Artificial',
    category: 'Tecnologia',
    level: 'Iniciante',
    courseCount: 9,
    durationHours: 28,
    icon: 'ai',
  },
  {
    id: 'lgpd-na-pratica',
    title: 'LGPD na Prática',
    category: 'Segurança',
    level: 'Iniciante',
    courseCount: 6,
    durationHours: 16,
    icon: 'lock',
  },
  {
    id: 'produtividade-google',
    title: 'Produtividade com Google Workspace',
    category: 'Produtividade',
    level: 'Iniciante',
    courseCount: 6,
    durationHours: 14,
    icon: 'productivity',
  },
]

export type FeaturedLearningPath = {
  badge: string
  title: string
  description: string
  courseCount: number
  level: LearningPathLevel
  durationHours: number
  ctaLabel: string
}

export const featuredLearningPath: FeaturedLearningPath = {
  badge: 'Em destaque',
  title: 'Trilha de Cibersegurança',
  description:
    'Aprenda a proteger sistemas, redes e dados contra ameaças digitais. Do básico ao avançado, com foco em práticas do mundo real.',
  courseCount: 12,
  level: 'Intermediário',
  durationHours: 48,
  ctaLabel: 'Explorar trilha',
}
