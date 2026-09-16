import {
  BrainCircuit,
  ChartNoAxesCombined,
  CloudCog,
  Fingerprint,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { type CourseThumbnailKey } from '../../../mocks/meus-cursos.mock'

const thumbnailConfig: Record<CourseThumbnailKey, { icon: LucideIcon; tileClass: string; iconClass: string }> = {
  security: {
    icon: ShieldCheck,
    tileClass: 'from-indigo-950 via-blue-950 to-sky-900',
    iconClass: 'bg-blue-600 text-cyan-100',
  },
  cloud: {
    icon: CloudCog,
    tileClass: 'from-slate-950 via-blue-950 to-indigo-900',
    iconClass: 'bg-sky-500 text-white',
  },
  data: {
    icon: ChartNoAxesCombined,
    tileClass: 'from-emerald-950 via-teal-950 to-cyan-900',
    iconClass: 'bg-emerald-500 text-white',
  },
  cybersecurity: {
    icon: Fingerprint,
    tileClass: 'from-violet-950 via-indigo-950 to-blue-900',
    iconClass: 'bg-violet-600 text-white',
  },
  ai: {
    icon: BrainCircuit,
    tileClass: 'from-violet-950 via-fuchsia-950 to-indigo-900',
    iconClass: 'bg-violet-600 text-white',
  },
  lgpd: {
    icon: ShieldCheck,
    tileClass: 'from-teal-950 via-emerald-950 to-cyan-900',
    iconClass: 'bg-emerald-500 text-white',
  },
}

type CourseThumbnailProps = {
  thumbnail: CourseThumbnailKey
  size?: 'small' | 'medium' | 'large'
}

const sizeClasses = {
  small: 'h-14 w-16 rounded-xl',
  medium: 'h-20 w-24 rounded-2xl',
  large: 'h-full min-h-[220px] w-full rounded-[20px] sm:w-[190px]',
}

export default function CourseThumbnail({ thumbnail, size = 'medium' }: CourseThumbnailProps) {
  const { icon: Icon, tileClass, iconClass } = thumbnailConfig[thumbnail]

  return (
    <span
      aria-hidden="true"
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-gradient-to-br ${tileClass} ${sizeClasses[size]}`}
    >
      <span className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-cyan-300/15 blur-2xl" />
      <span className={`relative flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg ${iconClass}`}>
        <Icon className={size === 'large' ? 'h-14 w-14' : 'h-7 w-7'} strokeWidth={1.5} />
      </span>
      <span className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-cyan-300/15 blur-2xl" />
    </span>
  )
}
