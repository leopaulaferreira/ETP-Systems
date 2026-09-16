import { CalendarDays, Clock3, MoreVertical, PlayCircle } from 'lucide-react'
import { continueCourse } from '../../../mocks/meus-cursos.mock'
import CourseThumbnail from './CourseThumbnail'

export default function ContinueCourseCard() {
  return (
    <section className="flex flex-col gap-5 rounded-[22px] border border-ink-200/70 bg-panel p-5 shadow-card sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[18px] font-extrabold tracking-[-0.015em] text-ink-900">Continue de onde parou</h2>
        <button
          type="button"
          aria-label="Mais opções do curso"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-[190px_minmax(0,1fr)] md:gap-6">
        <CourseThumbnail thumbnail={continueCourse.thumbnail} size="large" />

        <div className="flex min-w-0 flex-col justify-between gap-5">
          <div className="flex flex-col items-start gap-2.5">
            <span className="rounded-md border border-brand-cyan-400/20 bg-brand-cyan-400/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-brand-cyan-400">
              {continueCourse.type}
            </span>
            <h3 className="text-[21px] font-extrabold leading-tight tracking-[-0.02em] text-ink-900 sm:text-2xl">
              {continueCourse.title}
            </h3>
            <p className="text-sm leading-6 text-ink-500">
              Aprenda os principais conceitos, práticas e tecnologias para proteger informações e sistemas contra ameaças digitais.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-[13px]">
              <span className="font-bold text-ink-700">Progresso</span>
              <span className="font-extrabold text-brand-blue-400">{continueCourse.progress}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-ink-100 shadow-inner">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-blue-700 via-brand-blue-600 to-brand-cyan-500"
                style={{ width: `${continueCourse.progress}%` }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-ink-100 pt-3.5">
            <div className="flex min-w-0 flex-col gap-2 text-[11px] font-semibold text-ink-500">
              <span className="flex items-center gap-1.5">
                <PlayCircle className="h-4 w-4 shrink-0 text-brand-blue-400" />
                Última aula acessada
              </span>
              <span className="truncate text-ink-700">{continueCourse.lastLesson}</span>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-500">
                <Clock3 className="h-3.5 w-3.5" />
                Tempo total: {continueCourse.duration}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-500">
                <CalendarDays className="h-3.5 w-3.5" />
                Concluído em: {continueCourse.completedAt}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl bg-brand-blue-700 px-4 py-2.5 text-[13px] font-extrabold text-white shadow-[0_10px_22px_-12px_rgba(29,78,216,0.8)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#17399c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500"
          >
            Continuar curso
            <PlayCircle className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
