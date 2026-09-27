import { Check, ClipboardCheck, GraduationCap, Sparkles, Target } from 'lucide-react'

export default function AssessmentHero() {
  return (
    <section className="relative isolate flex min-h-[206px] items-center overflow-hidden rounded-[24px] border border-brand-blue-500/20 bg-gradient-to-br from-[#111f3a] via-panel to-[#102755] px-6 py-8 shadow-[0_24px_50px_-32px_rgba(0,0,0,0.85)] sm:px-8 lg:min-h-[226px] lg:px-10 lg:py-9">
      <span
        aria-hidden="true"
        className="absolute -left-16 -top-24 h-52 w-52 rounded-full border-[36px] border-brand-blue-500/[0.035]"
      />
      <div className="relative z-10 flex flex-col items-start gap-3.5 xl:max-w-[57%]">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue-500/20 bg-brand-blue-500/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.11em] text-brand-blue-400">
          <ClipboardCheck className="h-3.5 w-3.5 text-brand-cyan-400" aria-hidden="true" />
          Cada etapa, uma conquista
        </span>
        <h1 className="text-[31px] font-extrabold leading-[1.12] tracking-[-0.025em] text-ink-900 sm:text-[34px] lg:text-[36px]">
          Minhas Avaliações
        </h1>
        <p className="max-w-[620px] text-[15px] leading-7 text-ink-500 sm:text-base">
          Coloque seu conhecimento em prática, acompanhe seus resultados e descubra o próximo passo
          para evoluir.
        </p>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-1/2 hidden h-[226px] w-[340px] -translate-y-1/2 xl:block"
      >
        <span className="absolute right-6 top-2 h-52 w-52 rounded-full border border-brand-blue-400/15 bg-brand-blue-500/5" />
        <span className="absolute right-12 top-8 h-40 w-40 rounded-full border border-dashed border-brand-cyan-400/20" />
        <div className="absolute right-24 top-6 flex h-[184px] w-[146px] -rotate-6 flex-col gap-4 rounded-2xl border border-brand-blue-400/40 bg-gradient-to-br from-navy-700 to-navy-900 px-5 pt-8 shadow-[14px_18px_35px_-12px_rgba(0,0,0,0.7)]">
          <span className="absolute -top-2 left-1/2 h-5 w-16 -translate-x-1/2 rounded-md border border-brand-blue-400/30 bg-navy-800" />
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex items-center gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-cyan-400/15">
                <Check className="h-3.5 w-3.5 text-brand-cyan-400" />
              </span>
              <span
                className={`h-1.5 rounded-full bg-brand-blue-400/50 ${row === 1 ? 'w-10' : 'w-14'}`}
              />
            </div>
          ))}
          <span className="mt-1 h-1 w-16 rounded-full bg-brand-blue-400/20" />
        </div>
        <span className="absolute bottom-4 left-12 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-300/30 bg-gradient-to-br from-emerald-500 to-teal-700 shadow-lg">
          <Check className="h-10 w-10 text-white" strokeWidth={2.5} />
        </span>
        <span className="absolute bottom-7 right-5 flex h-20 w-20 rotate-6 items-center justify-center rounded-[22px] border border-brand-blue-400/20 bg-navy-800 shadow-lg">
          <GraduationCap className="h-14 w-14 text-brand-blue-400" strokeWidth={1.35} />
        </span>
        <Target
          className="absolute right-3 top-4 h-10 w-10 text-brand-cyan-400/50"
          strokeWidth={1.3}
        />
        <Sparkles
          className="absolute left-9 top-9 h-6 w-6 text-brand-cyan-400/70"
          strokeWidth={1.5}
        />
      </div>
    </section>
  )
}
