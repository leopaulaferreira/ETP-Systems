import { type InputHTMLAttributes } from 'react'

/** Caixa de seleção utilizada pela login. */
type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  tone?: 'light' | 'dark'
}

export default function Checkbox({ label, id, className = '', tone = 'light', ...rest }: CheckboxProps) {
  const isDark = tone === 'dark'
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer select-none items-center gap-2 text-sm ${isDark ? 'text-white/80' : 'text-ink-700'} ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        className={`h-4 w-4 rounded accent-brand-cyan-400 transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan-400/30 motion-reduce:transform-none motion-reduce:transition-none ${
          isDark ? 'border-white/25 bg-white/10' : 'border-ink-200 text-brand-blue-600'
        }`}
        {...rest}
      />
      {label}
    </label>
  )
}
