import { ShieldCheck, Layers, RotateCcw, ArrowRight } from 'lucide-react'
import Button from '../../../components/ui/Button'
import { continueLearning } from '../../../mocks/dashboard.mock'

export default function ContinueLearningCard() {
  const data = continueLearning

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-ink-200/60 bg-white p-6 shadow-card sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-ink-900">Continuar aprendendo</h2>
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-blue-600 transition-colors duration-150 hover:text-brand-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        >
          Ver minhas trilhas
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>

      <div className="group/thumb flex flex-col gap-5 sm:flex-row">
        {/*
          Thumbnail PLACEHOLDER: o projeto ainda não tem um asset de capa para
          trilhas/cursos. Composição feita com ícone lucide-react + gradiente
          do tema até existir um asset definitivo.
        */}
        <div className="relative flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-brand-blue-700 sm:h-auto sm:w-44">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-brand-cyan-400/20 blur-2xl" />
          <ShieldCheck
            className="relative h-16 w-16 text-brand-cyan-400 transition-transform duration-300 group-hover/thumb:scale-105"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="w-fit rounded-md bg-blue-50 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-blue-600">
              {data.badge}
            </span>
            <h3 className="text-2xl font-bold leading-tight text-ink-900">{data.title}</h3>
            <p className="text-sm leading-relaxed text-ink-500">{data.description}</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-ink-700">Progresso</span>
              <span className="font-bold text-ink-900">{data.progressPercent}%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-blue-600 to-brand-cyan-500"
                style={{ width: `${data.progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-col gap-1.5 text-xs text-ink-500">
              <span className="flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                {data.modulesCompleted} de {data.modulesTotal} módulos concluídos
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                {data.lastActivity}
              </span>
            </div>
            <Button type="button" className="shrink-0">
              {data.ctaLabel}
              <ArrowRight className="ml-1.5 h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
