import WelcomeIllustration from './WelcomeIllustration'
import { currentUser } from '../../dashboard.mock'

export default function WelcomeSection() {
  return (
    <section className="flex items-center justify-between gap-6 rounded-2xl">
      <div className="flex flex-col gap-2">
        <h1 className="text-[28px] font-bold leading-tight tracking-[-0.01em] text-ink-900">
          Olá, {currentUser.name} <span aria-hidden="true">👋</span>
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-ink-500">
          Que bom ter você aqui! Continue aprendendo e evoluindo na sua jornada profissional.
        </p>
      </div>
      <WelcomeIllustration />
    </section>
  )
}
