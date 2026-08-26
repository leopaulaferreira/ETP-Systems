import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import TrilhasHero from './components/TrilhasHero'
import TrilhasFilters from './components/TrilhasFilters'
import FeaturedTrailCard from './components/FeaturedTrailCard'
import TrailGrid from './components/TrailGrid'
import {
  categoryFilters,
  levelFilters,
  learningPaths,
  type CategoryFilter,
  type LevelFilter,
} from '../../mocks/trilhas.mock'

export default function TrilhasPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todas')
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>('Todos')

  const filteredPaths = useMemo(
    () =>
      learningPaths.filter(
        (path) =>
          (selectedCategory === 'Todas' || path.category === selectedCategory) &&
          (selectedLevel === 'Todos' || path.level === selectedLevel),
      ),
    [selectedCategory, selectedLevel],
  )

  return (
    <>
      <TrilhasHero />

      <TrilhasFilters
        categories={categoryFilters}
        levels={levelFilters}
        selectedCategory={selectedCategory}
        selectedLevel={selectedLevel}
        onSelectCategory={setSelectedCategory}
        onSelectLevel={setSelectedLevel}
      />

      <FeaturedTrailCard />

      <TrailGrid paths={filteredPaths} />

      <div className="flex justify-center pt-1">
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm font-semibold text-brand-blue-600 transition-colors duration-150 hover:text-brand-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          Ver todas as trilhas
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>
    </>
  )
}
