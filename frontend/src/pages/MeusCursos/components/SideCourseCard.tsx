import { ArrowRight } from 'lucide-react'
import { type CourseItem } from '../../../mocks/meus-cursos.mock'
import CourseThumbnail from './CourseThumbnail'

type SideCourseCardProps = {
  title: string
  actionLabel: string
  courses: CourseItem[]
}

export default function SideCourseCard({ title, actionLabel, courses }: SideCourseCardProps) {
  return (
    <section className="flex flex-col rounded-[22px] border border-ink-200/70 bg-panel p-5 shadow-card sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[18px] font-extrabold tracking-[-0.015em] text-ink-900">{title}</h2>
        <button
          type="button"
          className="group flex shrink-0 items-center gap-1 text-[12px] font-bold text-brand-blue-400 hover:text-brand-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          Ver todos
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      <ul className="mt-4 flex flex-col divide-y divide-ink-100">
        {courses.map((course) => (
          <li key={course.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
            <CourseThumbnail thumbnail={course.thumbnail} size="small" />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="line-clamp-2 text-[13px] font-bold leading-snug text-ink-900">{course.title}</span>
              <span className="w-fit rounded-md border border-brand-cyan-400/20 bg-brand-cyan-400/10 px-1.5 py-0.5 text-[9px] font-extrabold tracking-wide text-brand-cyan-400">
                {course.type}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-5 flex min-h-10 items-center justify-center gap-2 rounded-xl border border-ink-200 bg-panel-alt px-3 py-2 text-xs font-extrabold text-brand-blue-400 transition-colors hover:border-brand-blue-500/40 hover:bg-brand-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
      >
        {actionLabel}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </section>
  )
}
