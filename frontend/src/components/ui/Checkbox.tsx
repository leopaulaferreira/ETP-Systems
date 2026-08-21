import { type InputHTMLAttributes } from 'react'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export default function Checkbox({ label, id, className = '', ...rest }: CheckboxProps) {
  return (
    <label htmlFor={id} className={`flex select-none items-center gap-2 text-sm text-ink-700 ${className}`}>
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 rounded border-ink-200 text-brand-blue-600 accent-brand-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500/30"
        {...rest}
      />
      {label}
    </label>
  )
}
