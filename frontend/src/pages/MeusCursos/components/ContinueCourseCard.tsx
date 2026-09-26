import { ArrowRight, Bookmark, Clock3, History } from 'lucide-react'
import { continueCourse, type CourseItem } from '../../../mocks/meus-cursos.mock'
import CourseThumbnail from './CourseThumbnail'
import CourseBadge from './CourseBadge'
import CourseProgress from './CourseProgress'

type ContinueCourseCardProps = {
  isSaved: boolean
  onOpen: (course: CourseItem) => void
  onToggleSave: (course: CourseItem) => void
}

export default function ContinueCourseCard({ isSaved, onOpen, onToggleSave }: ContinueCourseCardProps) {
  return (
    <section className="flex min-w-0 flex-col gap-5 rounded-[22px] border border-ink-200/70 bg-panel p-5 shadow-card sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[19px] font-extrabold tracking-[-0.015em] text-ink-900 sm:text-xl">Continue de onde parou</h2>
        <button type="button" onClick={() => onToggleSave(continueCourse)} aria-pressed={isSaved} aria-label={`${isSaved ? 'Remover dos salvos' : 'Salvar'}: ${continueCourse.title}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-brand-blue-400 hover:bg-brand-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400">
          <Bookmark className="h-4 w-4" fill={isSaved ? 'currentColor' : 'none'} aria-hidden="true" />
        </button>
      </div>
      <div className="grid gap-5 md:grid-cols-[170px_minmax(0,1fr)] md:gap-6">
        <CourseThumbnail thumbnail={continueCourse.thumbnail} size="large" />
        <div className="flex min-w-0 flex-col justify-between gap-5">
          <div className="flex flex-col items-start gap-2.5">
            <CourseBadge type={continueCourse.type} />
            <h3 className="text-[21px] font-extrabold leading-tight tracking-[-0.02em] text-ink-900 sm:text-2xl">{continueCourse.title}</h3>
            <p className="text-sm leading-6 text-ink-500">{continueCourse.description}</p>
          </div>
          <CourseProgress course={continueCourse} />
          <div className="flex flex-col gap-3 border-t border-ink-100 pt-4">
            <div className="flex items-start gap-2 text-xs text-ink-500">
              <History className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-400" aria-hidden="true" />
              <div className="flex flex-col gap-1"><span>Última aula acessada</span><span className="font-semibold leading-5 text-ink-700">{continueCourse.lastLesson}</span></div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="flex items-center gap-1.5 text-xs text-ink-500"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" />{continueCourse.duration} de conteúdo</span>
              <button type="button" onClick={() => onOpen(continueCourse)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-blue-700 px-4 py-2.5 text-[13px] font-extrabold text-white transition-colors hover:bg-brand-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400">
                Ver curso <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
