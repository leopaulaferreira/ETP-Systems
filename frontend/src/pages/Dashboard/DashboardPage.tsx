import WelcomeSection from './components/WelcomeSection'
import StatsGrid from './components/StatsGrid'
import ContinueLearningCard from './components/ContinueLearningCard'
import RecommendationsCard from './components/RecommendationsCard'
import RecentAchievementsCard from './components/RecentAchievementsCard'
import RecentCertificatesCard from './components/RecentCertificatesCard'
import ProgressOverviewCard from './components/ProgressOverviewCard'

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <WelcomeSection />
      <StatsGrid />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,3fr)_minmax(360px,2fr)]">
        <ContinueLearningCard />
        <RecommendationsCard />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <RecentAchievementsCard />
        <RecentCertificatesCard />
        <ProgressOverviewCard />
      </div>
    </div>
  )
}
