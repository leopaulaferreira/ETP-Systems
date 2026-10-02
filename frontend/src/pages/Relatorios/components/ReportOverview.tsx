import { Medal, Trophy, UsersRound } from 'lucide-react'
import Avatar from '../../../components/ui/Avatar'
import { currentUser } from '../../../mocks/user.mock'
import {
  reportCourseStatus,
  reportPopularCourses,
  reportRanking,
} from '../../../mocks/relatorios.mock'
import CourseArtwork from '../../Cursos/components/CourseArtwork'
import ReportPanel from './ReportPanel'

export default function ReportOverview({
  onDetails,
}: {
  onDetails: (kind: 'status' | 'ranking' | 'popular') => void
}) {
  const total = reportCourseStatus.reduce((sum, item) => sum + item.count, 0)
  const completed = reportCourseStatus.find((item) => item.label === 'Concluídos')?.count ?? 0
  const maxStudents = reportPopularCourses[0].students
  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-extrabold tracking-tight text-ink-900">
          Seu panorama de aprendizado
        </h2>
        <span className="text-[11px] text-ink-500">Visão geral · independente do período</span>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <ReportPanel
          title="Status de conclusão"
          eyebrow="Consistência que faz a diferença"
          onDetails={() => onDetails('status')}
        >
          <div className="relative mx-auto mb-4 h-48 w-48">
            <svg
              viewBox="0 0 192 192"
              className="h-full w-full -rotate-90"
              role="img"
              aria-label={reportCourseStatus
                .map((item) => `${item.label}: ${item.count} cursos`)
                .join('; ')}
            >
              <circle
                cx="96"
                cy="96"
                r="62"
                fill="var(--color-panel-alt)"
                stroke="var(--color-ink-100)"
                strokeWidth="1"
              />
              {reportCourseStatus.map((item, index) => {
                const start =
                  (reportCourseStatus.slice(0, index).reduce((sum, part) => sum + part.count, 0) /
                    total) *
                  100
                return (
                  <circle
                    key={item.label}
                    cx="96"
                    cy="96"
                    r="80"
                    pathLength="100"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="18"
                    strokeDasharray={`${(item.count / total) * 100} ${100 - (item.count / total) * 100}`}
                    strokeDashoffset={-start}
                    strokeLinecap="butt"
                  />
                )
              })}
              {reportCourseStatus.map((item, index) => {
                const angle =
                  (reportCourseStatus.slice(0, index).reduce((sum, part) => sum + part.count, 0) /
                    total) *
                  Math.PI *
                  2
                return (
                  <line
                    key={item.label}
                    x1={96 + 69 * Math.cos(angle)}
                    y1={96 + 69 * Math.sin(angle)}
                    x2={96 + 91 * Math.cos(angle)}
                    y2={96 + 91 * Math.sin(angle)}
                    stroke="var(--color-panel)"
                    strokeWidth="4"
                  />
                )
              })}
            </svg>
            <span className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-ink-500">
                Seu progresso
              </span>
              <strong className="flex items-baseline gap-0.5 text-[38px] font-extrabold leading-none tracking-[-0.04em] text-ink-900">
                {Math.round((completed / total) * 100)}
                <span className="text-lg font-semibold text-ink-500">%</span>
              </strong>
              <span className="mt-2 text-[10px] font-medium text-ink-500">
                {completed} de {total} concluídos
              </span>
            </span>
          </div>
          <ul className="flex flex-1 flex-col gap-3 px-5 pb-5 sm:px-6">
            {reportCourseStatus.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-3 text-xs">
                <span className="flex items-center gap-2 text-ink-500">
                  <span aria-hidden="true" className={`h-2 w-2 rounded-full ${item.dot}`} />
                  {item.label}
                </span>
                <span className="font-semibold text-ink-700">
                  {item.count}
                  <span className="ml-3 inline-block w-8 text-right text-[10px] font-normal text-ink-500">
                    {Math.round((item.count / total) * 100)}%
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="border-t border-ink-100 px-5 py-4 text-center text-[11px] text-ink-500">
            <strong className="font-semibold text-ink-700">
              {completed} de {total} cursos
            </strong>{' '}
            concluídos na sua jornada
          </p>
        </ReportPanel>
        <ReportPanel
          title="Ranking de aprendizes"
          eyebrow="Aprendendo em comunidade"
          actionLabel="Ver ranking completo"
          onDetails={() => onDetails('ranking')}
        >
          <ol className="flex flex-1 flex-col gap-1 px-3 pb-3 sm:px-4">
            {reportRanking.slice(0, 5).map((item, index) => {
              const current = item.name === currentUser.name
              return (
                <li
                  key={item.name}
                  className={`flex items-center gap-2.5 rounded-xl px-2 py-3 ${current ? 'border border-brand-blue-500/20 bg-brand-blue-500/10' : 'border border-transparent'}`}
                >
                  <span
                    className={`flex w-5 shrink-0 items-center justify-center text-[11px] font-bold ${index === 0 ? 'text-amber-300' : 'text-ink-500'}`}
                  >
                    {index === 0 ? (
                      <Trophy className="h-4 w-4" aria-label="Primeiro lugar" />
                    ) : (
                      `${index + 1}º`
                    )}
                  </span>
                  <Avatar name={item.name} className="h-8 w-8 text-[10px]" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold leading-5 text-ink-900">
                      {item.name}
                    </span>
                    <span className="block text-[10px] text-ink-500">
                      {current ? 'Você' : 'Aprendiz'} · {item.hours}h estudadas
                    </span>
                  </span>
                  <span className="flex shrink-0 flex-col items-center text-sm font-extrabold text-ink-700">
                    {item.certificates}
                    <Medal className="mt-1 h-3 w-3 text-ink-500" aria-label="certificados" />
                  </span>
                </li>
              )
            })}
          </ol>
          <p className="border-t border-ink-100 px-5 py-4 text-center text-[11px] text-ink-500">
            Ordenado por certificados e horas estudadas
          </p>
        </ReportPanel>
        <ReportPanel
          title="Cursos mais populares"
          eyebrow="Inspire seu próximo passo"
          actionLabel="Ver todos"
          onDetails={() => onDetails('popular')}
          className="md:col-span-2 xl:col-span-1"
        >
          <ol className="flex flex-1 flex-col gap-4 px-5 pb-5 sm:px-6">
            {reportPopularCourses.map((item, index) => (
              <li key={item.title} className="flex min-w-0 items-center gap-3">
                <CourseArtwork icon={item.icon} />
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold leading-5 text-ink-900">{item.title}</p>
                  <div className="mt-1.5 flex items-center gap-2">
                    <div
                      role="meter"
                      aria-label={`Popularidade de ${item.title}`}
                      aria-valuemin={0}
                      aria-valuemax={maxStudents}
                      aria-valuenow={item.students}
                      className="h-1 flex-1 overflow-hidden rounded-full bg-ink-100"
                    >
                      <span
                        className={`block h-full rounded-full ${index === 0 ? 'bg-brand-cyan-400' : 'bg-brand-blue-500/70'}`}
                        style={{ width: `${(item.students / maxStudents) * 100}%` }}
                      />
                    </div>
                    <span className="flex shrink-0 items-center gap-1 text-[10px] text-ink-500">
                      <UsersRound className="h-3 w-3" aria-label="Aprendizes" />
                      {item.students}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <p className="border-t border-ink-100 px-5 py-4 text-center text-[11px] text-ink-500">
            Os conteúdos mais procurados na plataforma
          </p>
        </ReportPanel>
      </div>
    </div>
  )
}
