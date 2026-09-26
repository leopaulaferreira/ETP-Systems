import { useMemo, useState } from 'react'
import { BookOpen, ChevronDown, SearchX } from 'lucide-react'
import { catalogCourses, featuredCourse, type CatalogCourse } from '../../mocks/cursos.mock'
import { initialFilters, selectCourses, type CatalogFilters } from './catalog'
import CatalogCourseCard from './components/CatalogCourseCard'
import CatalogToolbar from './components/CatalogToolbar'
import CourseCatalogDialog from './components/CourseCatalogDialog'
import CursosHero from './components/CursosHero'
import FeaturedCourseCard from './components/FeaturedCourseCard'

const PAGE_SIZE = 8

export default function CursosPage() {
  const [filters, setFilters] = useState<CatalogFilters>(initialFilters)
  const [filtersExpanded, setFiltersExpanded] = useState(false)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [selectedCourse, setSelectedCourse] = useState<CatalogCourse | null>(null)
  const filteredCourses = useMemo(() => selectCourses(catalogCourses, filters), [filters])
  const visibleCourses = filteredCourses.slice(0, visibleCount)
  const isFiltered =
    filters.query.trim() !== '' || filters.category !== 'Todas' || filters.level !== 'Todos'

  function updateFilters(update: Partial<CatalogFilters>) {
    setFilters((current) => ({ ...current, ...update }))
    setVisibleCount(PAGE_SIZE)
  }

  function resetFilters() {
    setFilters(initialFilters)
    setVisibleCount(PAGE_SIZE)
  }

  function showMore() {
    const firstNewCourse = filteredCourses[visibleCount]
    setVisibleCount((current) => current + PAGE_SIZE)
    if (firstNewCourse) {
      requestAnimationFrame(() =>
        document
          .getElementById(`course-title-${firstNewCourse.id}`)
          ?.focus({ preventScroll: true }),
      )
    }
  }

  return (
    <div className="flex min-w-0 flex-col gap-5 lg:gap-6">
      <CursosHero />
      <CatalogToolbar
        filters={filters}
        expanded={filtersExpanded}
        onToggle={() => setFiltersExpanded((current) => !current)}
        onChange={updateFilters}
        onReset={resetFilters}
      />
      {!isFiltered && <FeaturedCourseCard course={featuredCourse} onOpen={setSelectedCourse} />}
      <section aria-labelledby="catalog-title" className="flex min-w-0 flex-col gap-5">
        <h2 id="catalog-title" className="sr-only">
          Catálogo de cursos
        </h2>
        {visibleCourses.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {visibleCourses.map((course) => (
              <li key={course.id} className="min-w-0">
                <CatalogCourseCard course={course} onOpen={setSelectedCourse} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-[22px] border border-ink-200/70 bg-panel px-6 py-14 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-500/10">
              <SearchX className="h-7 w-7 text-brand-blue-400" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-extrabold text-ink-900">Nenhum curso encontrado</h3>
            <p className="max-w-sm text-sm leading-6 text-ink-500">
              Tente outro termo ou ajuste os filtros para encontrar seu próximo aprendizado.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-2 min-h-11 rounded-xl bg-brand-blue-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400"
            >
              Ver todos os cursos
            </button>
          </div>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 pb-1">
          <p
            role="status"
            aria-atomic="true"
            className="flex items-center gap-2 text-xs font-semibold text-ink-500"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            {filteredCourses.length === 0
              ? 'Nenhum resultado'
              : `Mostrando 1–${visibleCourses.length} de ${filteredCourses.length} ${filteredCourses.length === 1 ? 'curso' : 'cursos'}`}
          </p>
          {visibleCount < filteredCourses.length && (
            <button
              type="button"
              onClick={showMore}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-ink-200 bg-panel px-4 py-2.5 text-xs font-bold text-ink-700 hover:border-brand-blue-500/40 hover:bg-brand-blue-500/10 hover:text-brand-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400"
            >
              Ver mais cursos <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </section>
      {selectedCourse && (
        <CourseCatalogDialog course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  )
}
