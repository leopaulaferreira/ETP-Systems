import { ArrowRight, UsersRound } from 'lucide-react'
import Avatar from '../../../components/ui/Avatar'
import { currentUser } from '../../../mocks/user.mock'
import {
  reportCourseStatus,
  reportPopularCourses,
  reportRanking,
} from '../../../mocks/relatorios.mock'
import CourseArtwork from '../../Cursos/components/CourseArtwork'

const panel = 'min-w-0 rounded-[22px] border border-ink-200/70 bg-panel p-5 shadow-card sm:p-6'
const action =
  'inline-flex min-h-9 shrink-0 items-center gap-1 rounded-lg px-1.5 text-[10px] font-bold text-brand-blue-400 hover:bg-brand-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-400'

function Heading({
  title,
  actionLabel,
  onClick,
}: {
  title: string
  actionLabel: string
  onClick: () => void
}) {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
      <h2 className="text-[15px] font-extrabold tracking-tight text-ink-900">{title}</h2>
      <button type="button" onClick={onClick} className={action}>
        {actionLabel}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}

export default function ReportOverview({
  onDetails,
}: {
  onDetails: (kind: 'status' | 'ranking' | 'popular') => void
}) {
  const total = reportCourseStatus.reduce((sum, item) => sum + item.count, 0)
  const gradient = reportCourseStatus
    .map((item, index) => {
      const start = reportCourseStatus.slice(0, index).reduce((sum, part) => sum + part.count, 0) / total * 100
      const end = start + item.count / total * 100
      return `${item.color} ${start}% ${end}%`
    })
    .join(', ')
  const maxStudents = reportPopularCourses[0].students
  return (
    <div className="grid min-w-0 grid-cols-1 items-stretch gap-5 lg:grid-cols-2 xl:grid-cols-3">
      <section className={panel} aria-label="Status de conclusão dos cursos">
        <Heading
          title="Status de conclusão"
          actionLabel="Ver detalhes"
          onClick={() => onDetails('status')}
        />
        <div className="flex flex-wrap items-center justify-center gap-6 py-4 sm:flex-nowrap lg:flex-wrap">
          <div
            role="img"
            aria-label={reportCourseStatus
              .map((item) => `${item.label}: ${item.count} cursos`)
              .join('; ')}
            className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full"
            style={{ background: `conic-gradient(${gradient})` }}
          >
            <span className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-panel">
              <strong className="text-2xl font-extrabold text-ink-900">{total}</strong>
              <span className="text-[10px] text-ink-500">cursos</span>
            </span>
          </div>
          <ul className="flex min-w-[150px] flex-1 flex-col gap-3">
            {reportCourseStatus.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-2 text-[11px]">
                <span className="flex items-center gap-2 text-ink-500">
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.dot}`}
                  />
                  {item.label}
                </span>
                <strong className="text-ink-900">{Math.round((item.count / total) * 100)}%</strong>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-auto text-center text-[11px] text-ink-500">
          Situação atual dos cursos demonstrativos
        </p>
      </section>
      <section className={panel} aria-label="Ranking de aprendizes">
        <Heading
          title="Ranking de aprendizes"
          actionLabel="Ver ranking completo"
          onClick={() => onDetails('ranking')}
        />
        <div className="grid grid-cols-[2rem_minmax(0,1fr)_3.5rem_3rem] gap-2 border-b border-ink-100 pb-2 text-[10px] text-ink-500">
          <span>Pos.</span>
          <span>Aprendiz</span>
          <span className="text-right">Cert.</span>
          <span className="text-right">Horas</span>
        </div>
        <ol className="divide-y divide-ink-100">
          {reportRanking.slice(0, 5).map((item, index) => (
            <li
              key={item.name}
              className={`grid grid-cols-[2rem_minmax(0,1fr)_3.5rem_3rem] items-center gap-2 rounded-xl py-2 text-xs ${item.name === currentUser.name ? 'bg-brand-blue-500/10 px-2 -mx-2' : ''}`}
            >
              <span className="font-bold text-brand-blue-400">{index + 1}º</span>
              <span className="flex min-w-0 items-center gap-2">
                <Avatar name={item.name} className="h-8 w-8 text-[10px]" />
                <span className="min-w-0 truncate font-semibold text-ink-900">{item.name}</span>
              </span>
              <span className="text-right font-semibold text-ink-700">{item.certificates}</span>
              <span className="text-right text-ink-500">{item.hours}h</span>
            </li>
          ))}
        </ol>
      </section>
      <section
        className={`${panel} lg:col-span-2 xl:col-span-1`}
        aria-label="Cursos mais populares"
      >
        <Heading
          title="Cursos mais populares"
          actionLabel="Ver todos"
          onClick={() => onDetails('popular')}
        />
        <ol className="flex flex-col gap-4">
          {reportPopularCourses.slice(0, 5).map((item) => (
            <li key={item.title} className="flex min-w-0 items-center gap-3">
              <CourseArtwork icon={item.icon} />
              <span className="min-w-0 flex-1">
                <span className="flex items-start justify-between gap-2">
                  <span className="line-clamp-2 text-xs font-bold leading-5 text-ink-900">
                    {item.title}
                  </span>
                  <span className="flex shrink-0 items-center gap-1 text-[10px] text-ink-500">
                    <UsersRound className="h-3 w-3" aria-hidden="true" />
                    {item.students}
                  </span>
                </span>
                <span
                  role="meter"
                  aria-label={`Popularidade de ${item.title}`}
                  aria-valuemin={0}
                  aria-valuemax={maxStudents}
                  aria-valuenow={item.students}
                  className="mt-2 block h-1.5 overflow-hidden rounded-full bg-ink-100"
                >
                  <span
                    className="block h-full rounded-full bg-brand-blue-600"
                    style={{ width: `${(item.students / maxStudents) * 100}%` }}
                  />
                </span>
              </span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
