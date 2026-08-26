import WelcomeIllustration from './WelcomeIllustration'
import { currentUser } from '../../../mocks/user.mock'

export default function WelcomeSection() {
  return (
    <section className="flex items-center justify-between gap-6">
      <div className="flex max-w-xl flex-col gap-2.5">
        <h1 className="text-[30px] font-bold leading-tight tracking-[-0.015em] text-ink-900">
          Olá, {currentUser.name} <span aria-hidden="true">👋</span>
        </h1>
        <p className="text-[15px] leading-relaxed text-ink-500">
          Que bom ter você aqui! Continue aprendendo e evoluindo na sua jornada profissional.
        </p>
      </div>
      <WelcomeIllustration />
    </section>
  )
}
