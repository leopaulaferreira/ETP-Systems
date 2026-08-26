import {
  LayoutDashboard,
  Route,
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Award,
  BarChart3,
  User,
  Settings,
  type LucideIcon,
} from 'lucide-react'

export type NavItemId =
  | 'dashboard'
  | 'trilhas'
  | 'cursos'
  | 'meus-cursos'
  | 'avaliacoes'
  | 'certificados'
  | 'relatorios'
  | 'perfil'
  | 'configuracoes'

export type NavItem = {
  id: NavItemId
  label: string
  to: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { id: 'trilhas', label: 'Trilhas', to: '/trilhas', icon: Route },
  { id: 'cursos', label: 'Cursos', to: '/cursos', icon: BookOpen },
  { id: 'meus-cursos', label: 'Meus Cursos', to: '/meus-cursos', icon: GraduationCap },
  { id: 'avaliacoes', label: 'Avaliações', to: '/avaliacoes', icon: ClipboardCheck },
  { id: 'certificados', label: 'Certificados', to: '/certificados', icon: Award },
  { id: 'relatorios', label: 'Relatórios', to: '/relatorios', icon: BarChart3 },
  { id: 'perfil', label: 'Perfil', to: '/perfil', icon: User },
  { id: 'configuracoes', label: 'Configurações', to: '/configuracoes', icon: Settings },
]
