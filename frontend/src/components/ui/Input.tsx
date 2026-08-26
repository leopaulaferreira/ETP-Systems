import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

/** Campo de entrada utilizado pela login. */
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  icon?: ReactNode
  error?: string
  trailing?: ReactNode
  tone?: 'light' | 'dark'
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      icon,
      error,
      trailing,
      id,
      className = '',
      tone = 'light',
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...rest
    },
    ref,
  ) => {
    const isDark = tone === 'dark'
    const errorId = id ? `${id}-error` : undefined
    const describedBy = [ariaDescribedBy, error ? errorId : undefined].filter(Boolean).join(' ') || undefined

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className={`text-sm font-medium ${isDark ? 'text-white/85' : 'text-ink-700'}`}>
            {label}
          </label>
        )}
        <div
          data-input-control
          className={`flex items-center gap-2 rounded-xl border px-3.5 py-3.5 transition-[border-color,background-color,box-shadow] duration-200 focus-within:ring-2 motion-reduce:transition-none ${
            isDark
              ? 'bg-white/[0.06] backdrop-blur-sm focus-within:border-brand-cyan-400 focus-within:ring-brand-cyan-400/20'
              : 'bg-white focus-within:border-brand-blue-500 focus-within:ring-brand-blue-500/20'
          } ${error ? (isDark ? 'border-red-400/70' : 'border-red-400') : isDark ? 'border-white/15' : 'border-ink-200'}`}
        >
          {icon && <span className={`shrink-0 ${isDark ? 'text-white/60' : 'text-ink-500'}`}>{icon}</span>}
          <input
            ref={ref}
            id={id}
            aria-describedby={describedBy}
            aria-invalid={error ? true : ariaInvalid}
            className={`w-full min-w-0 bg-transparent text-sm focus:outline-none ${
              isDark ? 'text-white placeholder:text-white/55' : 'text-ink-900 placeholder:text-ink-500'
            } ${className}`}
            {...rest}
          />
          {trailing && <span className="shrink-0">{trailing}</span>}
        </div>
        {error && (
          <span
            id={errorId}
            role="alert"
            className={`block text-xs font-medium ${isDark ? 'text-red-300' : 'text-red-500'}`}
          >
            {error}
          </span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
export default Input
