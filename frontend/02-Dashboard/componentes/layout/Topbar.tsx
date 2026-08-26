import { Search, Bell, ChevronDown } from 'lucide-react'
import Avatar from '../ui/Avatar'
import { currentUser } from '../../dashboard.mock'

export default function Topbar() {
  return (
    <header className="flex h-[92px] shrink-0 items-center justify-between gap-6 border-b border-ink-200 bg-white px-8">
      <div className="flex max-w-md flex-1 items-center gap-2.5 rounded-xl border border-ink-200 bg-white px-3.5 py-3 transition-[border-color,box-shadow] duration-150 focus-within:border-brand-blue-500 focus-within:ring-2 focus-within:ring-brand-blue-500/15">
        <Search className="h-[18px] w-[18px] shrink-0 text-ink-400" strokeWidth={2} aria-hidden="true" />
        <input
          type="search"
          placeholder="Buscar cursos, trilhas, temas..."
          aria-label="Buscar cursos, trilhas, temas"
          className="w-full min-w-0 bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label={`Notificações (${currentUser.notificationCount} não lidas)`}
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink-500 transition-colors duration-150 hover:bg-ink-100 hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          <Bell className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          {currentUser.notificationCount > 0 && (
            <span className="absolute right-1 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-blue-600 px-1 text-[10px] font-bold leading-none text-white">
              {currentUser.notificationCount}
            </span>
          )}
        </button>

        <div className="h-8 w-px bg-ink-200" aria-hidden="true" />

        <button
          type="button"
          className="flex items-center gap-3 rounded-xl px-1.5 py-1 transition-colors duration-150 hover:bg-ink-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          <Avatar name={currentUser.name} className="h-10 w-10" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-sm font-semibold text-ink-900">{currentUser.name}</span>
            <span className="text-xs text-ink-500">{currentUser.role}</span>
          </span>
          <ChevronDown className="h-4 w-4 text-ink-400" strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
