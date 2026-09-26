import {
  BrainCircuit, ChartNoAxesCombined, CloudCog, Fingerprint,
  Network, ShieldCheck, Workflow, type LucideIcon,
} from 'lucide-react'
import { type CourseThumbnailKey } from '../../../mocks/meus-cursos.mock'

// Cores e símbolos acompanham os mesmos temas em Dashboard e Trilhas.
const thumbnailConfig: Record<CourseThumbnailKey, { icon: LucideIcon; tile: string; accent: string }> = {
  security: { icon: ShieldCheck, tile: 'from-indigo-950 via-navy-900 to-indigo-900', accent: 'text-indigo-300 border-indigo-400/30 bg-indigo-500/20' },
  cloud: { icon: CloudCog, tile: 'from-navy-950 via-navy-900 to-orange-950', accent: 'text-orange-300 border-orange-400/30 bg-orange-500/20' },
  data: { icon: ChartNoAxesCombined, tile: 'from-navy-950 via-navy-900 to-blue-900', accent: 'text-blue-300 border-blue-400/30 bg-blue-500/20' },
  cybersecurity: { icon: Network, tile: 'from-violet-950 via-navy-900 to-violet-900', accent: 'text-violet-300 border-violet-400/30 bg-violet-500/20' },
  ai: { icon: BrainCircuit, tile: 'from-violet-950 via-navy-900 to-fuchsia-950', accent: 'text-violet-300 border-violet-400/30 bg-violet-500/20' },
  lgpd: { icon: Fingerprint, tile: 'from-navy-950 via-navy-900 to-teal-900', accent: 'text-teal-300 border-teal-400/30 bg-teal-500/20' },
  projects: { icon: Workflow, tile: 'from-navy-950 via-navy-900 to-rose-950', accent: 'text-rose-300 border-rose-400/30 bg-rose-500/20' },
}

const sizeClasses = {
  small: 'h-14 w-16 rounded-xl',
  medium: 'h-20 w-24 rounded-2xl',
  large: 'min-h-[220px] h-full w-full rounded-[20px]',
}

type CourseThumbnailProps = {
  thumbnail: CourseThumbnailKey
  size?: keyof typeof sizeClasses
}

export default function CourseThumbnail({ thumbnail, size = 'medium' }: CourseThumbnailProps) {
  const { icon: Icon, tile, accent } = thumbnailConfig[thumbnail]
  const large = size === 'large'

  return (
    <span aria-hidden="true" className={`relative isolate flex shrink-0 items-center justify-center overflow-hidden border border-white/[0.08] bg-gradient-to-br ${tile} ${sizeClasses[size]}`}>
      <span className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:18px_18px]" />
      <span className={`absolute rounded-full border opacity-30 ${accent} ${large ? 'h-44 w-44' : 'h-20 w-20'}`} />
      <span className={`absolute rotate-12 rounded-[22%] border opacity-40 ${accent} ${large ? 'h-32 w-32' : 'h-11 w-11'}`} />
      <span className={`relative flex items-center justify-center rounded-[24%] border shadow-lg backdrop-blur-sm ${accent} ${large ? 'h-24 w-24 -rotate-3' : 'h-10 w-10'}`}>
        <Icon className={`${large ? 'h-14 w-14 rotate-3' : 'h-6 w-6'} drop-shadow-[0_0_8px_currentColor]`} strokeWidth={1.5} />
      </span>
      {large && <>
        <span className="absolute left-4 top-4 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/60">Conhecimento que protege</span>
        <span className={`absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-xl border ${accent}`}><Network className="h-4 w-4" /></span>
        <span className="absolute bottom-7 left-5 h-px w-16 bg-gradient-to-r from-brand-cyan-400/60 to-transparent" />
      </>}
    </span>
  )
}
