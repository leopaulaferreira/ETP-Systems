import { useLocation } from 'react-router-dom'
import { Construction } from 'lucide-react'
import { navItems } from '../components/layout/navItems'

/**
 * Página temporária para itens do menu ainda não implementados.
 * O título é derivado da rota atual (via navItems) — quando a tela real
 * for construída, basta trocar a rota correspondente pelo componente definitivo.
 */
export default function ComingSoonPage() {
  const location = useLocation()
  const label = navItems.find((item) => item.to === location.pathname)?.label ?? 'Em breve'

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-ink-200 bg-white py-24 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue-600">
        <Construction className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold text-ink-900">{label}</h1>
        <p className="text-sm text-ink-500">Esta página ainda está em construção.</p>
      </div>
    </div>
  )
}
