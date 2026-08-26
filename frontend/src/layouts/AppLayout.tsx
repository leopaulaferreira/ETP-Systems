import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import Topbar from '../components/layout/Topbar'
import './AppLayout.css'

export default function AppLayout() {
  return (
    <div className="app-shell flex h-[100svh] min-h-[640px] w-full overflow-hidden bg-surface">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="app-scrollarea min-w-0 flex-1 overflow-y-auto">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-7 py-7 lg:px-9">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
