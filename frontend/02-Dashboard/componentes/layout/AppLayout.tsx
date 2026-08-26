import { type ReactNode } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { type NavItemId } from '../../dashboard.mock'

type AppLayoutProps = {
  activeItem: NavItemId
  children: ReactNode
}

export default function AppLayout({ activeItem, children }: AppLayoutProps) {
  return (
    <div className="dashboard-shell flex h-[100svh] min-h-[640px] w-full overflow-hidden bg-surface">
      <Sidebar activeItem={activeItem} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="dashboard-scrollarea min-w-0 flex-1 overflow-y-auto">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-7 py-7 lg:px-9">{children}</div>
        </main>
      </div>
    </div>
  )
}
