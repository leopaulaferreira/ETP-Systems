import { ArrowRight, Sparkles } from 'lucide-react'
import type { CatalogCourse } from '../../../mocks/cursos.mock'
import CourseArtwork from './CourseArtwork'
import CourseMetadata from './CourseMetadata'

type FeaturedCourseCardProps = { course: CatalogCourse; onOpen: (course: CatalogCourse) => void }

export default function FeaturedCourseCard({ course, onOpen }: FeaturedCourseCardProps) {
  return (
    <section
      aria-labelledby="featured-course-title"
      className="grid overflow-hidden rounded-[22px] border border-brand-blue-500/25 bg-panel shadow-card md:grid-cols-[210px_minmax(0,1fr)]"
    >
      <CourseArtwork icon={course.icon} featured />
      <div className="flex min-w-0 flex-col justify-center gap-3 p-5 sm:p-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-md border border-brand-blue-400/20 bg-brand-blue-500/10 px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide text-brand-blue-400">
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          Em destaque
        </span>
        <h2
          id="featured-course-title"
          className="text-xl font-extrabold leading-tight tracking-[-0.02em] text-ink-900 sm:text-[23px]"
        >
          {course.title}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-ink-500">{course.description}</p>
        <div className="mt-1 flex flex-wrap items-center justify-between gap-4">
          <CourseMetadata course={course} showStudents />
          <button
            type="button"
            onClick={() => onOpen(course)}
            aria-label={`Ver curso em destaque: ${course.title}`}
            className="inline-flex min-h-11 items-center justify-center gap-3 rounded-xl bg-brand-blue-700 px-5 py-2.5 text-[13px] font-extrabold text-white transition-colors hover:bg-brand-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400"
          >
            Ver curso <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
