/** Avatar com iniciais — não há asset de foto de usuário no projeto ainda. */
type AvatarProps = {
  name: string
  className?: string
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return `${first}${last}`.toUpperCase()
}

export default function Avatar({ name, className = '' }: AvatarProps) {
  return (
    <div
      role="img"
      aria-label={name}
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-600 to-brand-cyan-500 text-sm font-semibold text-white ${className}`}
    >
      {getInitials(name)}
    </div>
  )
}
