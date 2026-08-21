import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-surface px-6 text-center">
      <Logo />
      <h1 className="text-2xl font-bold text-ink-900">Dashboard</h1>
      <p className="max-w-sm text-sm text-ink-500">
        Login realizado com sucesso. Esta tela ainda não faz parte do escopo atual — apenas o fluxo de
        autenticação foi implementado.
      </p>
      <Link to="/" className="text-sm font-semibold text-brand-blue-600 hover:underline">
        ← Voltar para o login
      </Link>
    </div>
  )
}
