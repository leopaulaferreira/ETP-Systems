import { type CategoryFilter, type LevelFilter } from '../../../mocks/trilhas.mock'

type TrilhasFiltersProps = {
  categories: readonly CategoryFilter[]
  levels: readonly LevelFilter[]
  selectedCategory: CategoryFilter
  selectedLevel: LevelFilter
  onSelectCategory: (category: CategoryFilter) => void
  onSelectLevel: (level: LevelFilter) => void
}

export default function TrilhasFilters({
  categories,
  levels,
  selectedCategory,
  selectedLevel,
  onSelectCategory,
  onSelectLevel,
}: TrilhasFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-ink-200/60 bg-white p-4 shadow-card">
      <span className="pr-1 text-sm font-semibold text-ink-700">Categorias</span>
      {categories.map((category) => (
        <FilterPill
          key={category}
          label={category}
          isActive={category === selectedCategory}
          onClick={() => onSelectCategory(category)}
        />
      ))}

      <span className="ml-2 pr-1 text-sm font-semibold text-ink-700">Nível</span>
      {levels.map((level) => (
        <FilterPill key={level} label={level} isActive={level === selectedLevel} onClick={() => onSelectLevel(level)} />
      ))}
    </div>
  )
}

function FilterPill({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30 ${
        isActive
          ? 'border-brand-blue-600 bg-brand-blue-600 text-white shadow-sm'
          : 'border-ink-200 bg-white text-ink-700 hover:border-brand-blue-300 hover:bg-blue-50/60 hover:text-brand-blue-700'
      }`}
    >
      {label}
    </button>
  )
}
