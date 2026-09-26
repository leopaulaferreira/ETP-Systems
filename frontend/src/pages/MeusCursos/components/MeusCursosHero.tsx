import { GraduationCap } from 'lucide-react'
import learningIllustration from '../../../assets/illustrations/dashboard-hero-learning-dark.webp'

export default function MeusCursosHero() {
  return (
    <section className="relative isolate flex min-h-[206px] items-center overflow-hidden rounded-[24px] border border-brand-blue-500/20 bg-gradient-to-br from-[#111f3a] via-panel to-[#102755] px-6 py-8 shadow-[0_24px_50px_-32px_rgba(0,0,0,0.85)] sm:px-8 lg:min-h-[226px] lg:px-10 lg:py-9">
      <div aria-hidden="true" className="absolute -left-16 -top-24 h-52 w-52 rounded-full border-[36px] border-brand-blue-500/[0.035]" />
      <div className="relative z-10 flex flex-col items-start gap-3.5 xl:max-w-[55%]">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue-500/20 bg-brand-blue-500/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.11em] text-brand-blue-400">
          <GraduationCap className="h-3.5 w-3.5 text-brand-cyan-500" aria-hidden="true" />
          Seu espaço de aprendizado
        </span>
        <h1 className="text-[31px] font-extrabold leading-[1.12] tracking-[-0.025em] text-ink-900 sm:text-[34px] lg:text-[36px]">Meus Cursos</h1>
        <p className="max-w-[620px] text-[15px] leading-7 text-ink-500 sm:text-base">
          Retome seus estudos, acompanhe suas conquistas e encontre seu próximo aprendizado.
        </p>
      </div>
      <img src={learningIllustration} alt="" aria-hidden="true" className="pointer-events-none absolute right-5 top-1/2 hidden h-[238px] w-[440px] -translate-y-1/2 object-contain object-right xl:block" />
    </section>
  )
}
