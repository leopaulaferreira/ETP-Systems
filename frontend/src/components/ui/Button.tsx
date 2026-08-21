import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  loading?: boolean
  icon?: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-sm px-4 py-3.5 transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-brand-blue-700 text-white hover:bg-[#17399c] focus-visible:ring-brand-blue-500',
  secondary:
    'bg-white text-ink-700 border border-ink-200 hover:bg-ink-100 focus-visible:ring-brand-blue-500',
  ghost: 'bg-transparent text-brand-blue-600 hover:bg-brand-blue-600/10 focus-visible:ring-brand-blue-500',
}

export default function Button({
  variant = 'primary',
  loading = false,
  icon,
  children,
  className = '',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
          aria-hidden="true"
        />
      ) : (
        icon
      )}
      <span>{loading ? 'Entrando...' : children}</span>
    </button>
  )
}
