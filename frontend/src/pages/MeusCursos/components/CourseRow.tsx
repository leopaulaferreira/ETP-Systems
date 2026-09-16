import { CheckCircle2, MoreVertical, PlayCircle } from 'lucide-react'
import { type CourseItem } from '../../../mocks/meus-cursos.mock'
import CourseThumbnail from './CourseThumbnail'

type CourseRowProps = {
  course: CourseItem
  completed?: boolean
}

export default function CourseRow({ course, completed = false }: CourseRowProps) {
  return (
    <li className="relative flex flex-col gap-3 border-b border-ink-100 py-4 first:pt-0 last:border-b-0 last:pb-0 lg:grid lg:grid-cols-[minmax(220px,1.25fr)_minmax(130px,0.65fr)_minmax(150px,0.85fr)_auto_auto] lg:items-center lg:gap-5">
      <div className="flex min-w-0 items-center gap-3">
        <CourseThumbnail thumbnail={course.thumbnail} size="small" />
        <div className="flex min-w-0 flex-col gap-1.5">
          <span className="w-fit rounded-md border border-brand-cyan-400/20 bg-brand-cyan-400/10 px-1.5 py-0.5 text-[9px] font-extrabold tracking-wide text-brand-cyan-400">
            {course.type}
          </span>
          <h3 className="line-clamp-2 text-[13px] font-extrabold leading-snug text-ink-900">{course.title}</h3>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:block">
        <div className="flex items-center justify-between text-[11px] font-bold text-ink-500 lg:mb-2">
          <span>{completed ? 'Concluído' : `${course.progress}%`}</span>
          {completed && <CheckCircle2 className="h-4 w-4 text-emerald-400 lg:hidden" />}
        </div>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-100">
          <div
            className={`h-full rounded-full ${completed ? 'bg-emerald-500' : 'bg-brand-blue-600'}`}
            style={{ width: `${course.progress ?? 0}%` }}
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-1 text-[11px] font-semibold text-ink-500">
        <span>{completed ? 'Concluído em' : 'Última aula'}</span>
        <span className="line-clamp-2 text-ink-700">{completed ? course.completedAt : course.lastLesson}</span>
      </div>

      <button
        type="button"
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-brand-blue-700 px-4 py-2 text-xs font-extrabold text-white transition-colors hover:bg-[#17399c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 lg:min-w-[100px]"
      >
        {completed ? 'Revisar' : 'Continuar'}
        {!completed && <PlayCircle className="h-3.5 w-3.5" />}
      </button>

      <button
        type="button"
        aria-label={`Mais opções de ${course.title}`}
        className="absolute right-0 top-4 hidden h-8 w-8 items-center justify-center rounded-lg text-ink-400 hover:bg-ink-100 hover:text-ink-700 lg:relative lg:inset-auto lg:flex"
      >
        <MoreVertical className="h-4 w-4" />
      </button>
    </li>
  )
}
