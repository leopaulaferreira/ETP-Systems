import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  icon?: ReactNode
  error?: string
  trailing?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, trailing, id, className = '', ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-ink-700">
            {label}
          </label>
        )}
        <div
          className={`flex items-center gap-2 rounded-xl border bg-white px-3.5 py-3 transition-colors focus-within:border-brand-blue-500 focus-within:ring-2 focus-within:ring-brand-blue-500/20 ${
            error ? 'border-red-400' : 'border-ink-200'
          }`}
        >
          {icon && <span className="shrink-0 text-ink-400">{icon}</span>}
          <input
            ref={ref}
            id={id}
            className={`w-full min-w-0 bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none ${className}`}
            {...rest}
          />
          {trailing && <span className="shrink-0">{trailing}</span>}
        </div>
        {error && <span className="text-xs font-medium text-red-500">{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'
export default Input
