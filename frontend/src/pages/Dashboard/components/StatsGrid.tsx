import MetricCard from './MetricCard'
import { metricCards } from '../../../mocks/dashboard.mock'

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-5 xl:grid-cols-4">
      {metricCards.map((metric) => (
        <MetricCard key={metric.id} data={metric} />
      ))}
    </div>
  )
}
