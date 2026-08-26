import './dashboard.css'
import AppLayout from './componentes/layout/AppLayout'
import WelcomeSection from './componentes/dashboard/WelcomeSection'
import StatsGrid from './componentes/dashboard/StatsGrid'

export default function DashboardPage() {
  return (
    <AppLayout activeItem="dashboard">
      <WelcomeSection />
      <StatsGrid />
    </AppLayout>
  )
}
