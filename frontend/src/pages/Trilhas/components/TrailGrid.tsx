import TrailCard from './TrailCard'
import { type LearningPath } from '../../../mocks/trilhas.mock'

type TrailGridProps = {
  paths: LearningPath[]
}

export default function TrailGrid({ paths }: TrailGridProps) {
  if (paths.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-ink-200 bg-white p-10 text-center text-sm text-ink-500">
        Nenhuma trilha encontrada para os filtros selecionados.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {paths.map((path) => (
        <TrailCard key={path.id} path={path} />
      ))}
    </div>
  )
}
