import IllustratedIcon, { type IconTone } from '../../../components/ui/IllustratedIcon'
import { Award, GraduationCap, ShieldCheck, Trophy } from 'lucide-react'
import { certificateAchievements } from '../../../mocks/certificados.mock'
import { formatCertificateDate } from '../certificates'

const icons = { trophy: Trophy, shield: ShieldCheck, graduation: GraduationCap }
const tones: IconTone[] = ['orange', 'blue', 'emerald']

export default function CertificateAchievements({ completed }: { completed: number }) {
  return (
    <section className="flex min-w-0 flex-col gap-5 rounded-[22px] border border-ink-200/70 bg-panel p-5 shadow-card sm:p-6">
      <h2 className="text-lg font-extrabold tracking-tight text-ink-900">Suas conquistas</h2>
      <ul className="flex flex-1 flex-col justify-around gap-5">
        {certificateAchievements.map((achievement, index) => {
          const Icon = icons[achievement.icon]
          return (
            <li key={achievement.title} className="flex items-start gap-3">
              <IllustratedIcon icon={Icon} tone={tones[index]} size="compact" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold leading-5 text-ink-900">{achievement.title}</p>
                <p className="mt-1 text-[11px] leading-5 text-ink-500">{achievement.description}</p>
                <time dateTime={achievement.date} className="text-[10px] text-ink-500">
                  {formatCertificateDate(achievement.date)}
                </time>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="flex items-center gap-3 border-t border-ink-100 pt-4">
        <IllustratedIcon icon={Award} tone="blue" size="metric" />
        <div className="min-w-0 flex-1">
          <p className="text-[10px] text-ink-500">Próxima conquista</p>
          <p className="mt-1 text-xs font-bold text-ink-900">Mestre do Conhecimento</p>
          <p className="my-2 text-[11px] text-ink-500">
            Conclua 10 cursos <span className="float-right">{Math.min(completed, 10)}/10</span>
          </p>
          <progress
            value={Math.min(completed, 10)}
            max={10}
            aria-label="Progresso para Mestre do Conhecimento"
            className="h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-emerald-400 [&::-webkit-progress-bar]:bg-ink-100 [&::-webkit-progress-value]:bg-emerald-400"
          />
        </div>
      </div>
    </section>
  )
}
