import { ArrowRight } from 'lucide-react'
import { type CourseItem } from '../../../mocks/meus-cursos.mock'
import CourseRow from './CourseRow'

type CourseListCardProps = {
  title: string
  courses: CourseItem[]
  completed?: boolean
}

export default function CourseListCard({ title, courses, completed = false }: CourseListCardProps) {
  return (
    <section className="rounded-[22px] border border-ink-200/70 bg-panel p-5 shadow-card sm:p-6">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h2 className="text-[18px] font-extrabold tracking-[-0.015em] text-ink-900">{title}</h2>
        <button
          type="button"
          className="group flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-[13px] font-bold text-brand-blue-400 transition-colors hover:bg-brand-blue-500/10 hover:text-brand-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          Ver todos
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {courses.length > 0 ? (
        <ul>
          {courses.map((course) => (
            <CourseRow key={course.id} course={course} completed={completed} />
          ))}
        </ul>
      ) : (
        <p className="py-10 text-center text-sm text-ink-500">Nenhum curso encontrado nesta categoria.</p>
      )}
    </section>
  )
}
