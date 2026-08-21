type LogoProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="etp-cube-top" x1="3" y1="7" x2="21" y2="7" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#60d6ff" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="etp-cube-left" x1="3" y1="7" x2="12" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="1" stopColor="#1d3fb8" />
        </linearGradient>
        <linearGradient id="etp-cube-right" x1="12" y1="12" x2="21" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22c3ee" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <path d="M12 2 21 7 12 12 3 7Z" fill="url(#etp-cube-top)" />
      <path d="M3 7 12 12 12 21 3 16Z" fill="url(#etp-cube-left)" />
      <path d="M21 7 12 12 12 21 21 16Z" fill="url(#etp-cube-right)" />
    </svg>
  )
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-ink-900'
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className={`text-lg font-bold tracking-tight ${textColor}`}>ETP Systems</span>
    </div>
  )
}
