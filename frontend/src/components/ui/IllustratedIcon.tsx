import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export type IconTone =
  'indigo' | 'orange' | 'blue' | 'violet' | 'fuchsia' | 'teal' | 'rose' | 'emerald'

const themes: Record<IconTone, { tile: string; accent: string }> = {
  indigo: {
    tile: 'from-indigo-950 via-navy-900 to-indigo-900',
    accent: 'text-indigo-300 border-indigo-400/30 bg-indigo-500/20',
  },
  orange: {
    tile: 'from-navy-950 via-navy-900 to-orange-950',
    accent: 'text-orange-300 border-orange-400/30 bg-orange-500/20',
  },
  blue: {
    tile: 'from-navy-950 via-navy-900 to-blue-900',
    accent: 'text-blue-300 border-blue-400/30 bg-blue-500/20',
  },
  violet: {
    tile: 'from-violet-950 via-navy-900 to-violet-900',
    accent: 'text-violet-300 border-violet-400/30 bg-violet-500/20',
  },
  fuchsia: {
    tile: 'from-violet-950 via-navy-900 to-fuchsia-950',
    accent: 'text-violet-300 border-violet-400/30 bg-violet-500/20',
  },
  teal: {
    tile: 'from-navy-950 via-navy-900 to-teal-900',
    accent: 'text-teal-300 border-teal-400/30 bg-teal-500/20',
  },
  rose: {
    tile: 'from-navy-950 via-navy-900 to-rose-950',
    accent: 'text-rose-300 border-rose-400/30 bg-rose-500/20',
  },
  emerald: {
    tile: 'from-navy-950 via-navy-900 to-emerald-950',
    accent: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/20',
  },
}
const sizes = {
  compact: {
    tile: 'h-10 w-10 rounded-xl',
    center: 'h-7 w-7',
    icon: 'h-4.5 w-4.5',
    shape: 'h-8 w-8',
  },
  metric: {
    tile: 'h-13 w-13 rounded-2xl',
    center: 'h-9 w-9',
    icon: 'h-5.5 w-5.5',
    shape: 'h-10 w-10',
  },
  small: { tile: 'h-14 w-16 rounded-xl', center: 'h-10 w-10', icon: 'h-6 w-6', shape: 'h-11 w-11' },
  medium: {
    tile: 'h-20 w-24 rounded-2xl',
    center: 'h-10 w-10',
    icon: 'h-6 w-6',
    shape: 'h-11 w-11',
  },
  large: {
    tile: 'min-h-[220px] h-full w-full rounded-[20px]',
    center: 'h-24 w-24 -rotate-3',
    icon: 'h-14 w-14 rotate-3',
    shape: 'h-32 w-32',
  },
}

/** Acabamento visual compartilhado a partir das miniaturas de Meus Cursos. */
export default function IllustratedIcon({
  icon: Icon,
  tone,
  size = 'metric',
  children,
  cornerIcon: CornerIcon,
}: {
  icon: LucideIcon
  tone: IconTone
  size?: keyof typeof sizes
  children?: ReactNode
  cornerIcon?: LucideIcon
}) {
  const { tile, accent } = themes[tone]
  const dimensions = sizes[size]
  return (
    <span
      aria-hidden="true"
      className={`relative isolate flex shrink-0 items-center justify-center overflow-hidden border border-white/[0.08] bg-gradient-to-br ${tile} ${dimensions.tile}`}
    >
      <span className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:18px_18px]" />
      <span
        className={`absolute rounded-full border opacity-30 ${accent} ${size === 'large' ? 'h-44 w-44' : 'h-20 w-20'}`}
      />
      <span
        className={`absolute rotate-12 rounded-[22%] border opacity-40 ${accent} ${dimensions.shape}`}
      />
      <span
        className={`relative flex items-center justify-center rounded-[24%] border shadow-lg backdrop-blur-sm ${accent} ${dimensions.center}`}
      >
        <Icon
          className={`${dimensions.icon} drop-shadow-[0_0_8px_currentColor]`}
          strokeWidth={1.5}
        />
      </span>
      {CornerIcon && (
        <span
          className={`absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-xl border ${accent}`}
        >
          <CornerIcon className="h-4 w-4" />
        </span>
      )}
      {children}
    </span>
  )
}
