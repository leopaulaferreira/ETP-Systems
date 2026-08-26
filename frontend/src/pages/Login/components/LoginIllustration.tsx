import { useEffect, useState } from 'react'
import { Lottie } from 'lottie-react'
import animationData from '../../../assets/animations/login-student.json'

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    function handleChange(event: MediaQueryListEvent) {
      setPrefersReducedMotion(event.matches)
    }
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

/**
 * Ilustração decorativa do painel de marca do Login.
 *
 * Animação Lottie local ("STUDENT" — src/assets/animations/login-student.json),
 * puramente decorativa: sem controles, não clicável, aria-hidden. Respeita
 * prefers-reduced-motion (fica parada no primeiro quadro em vez de tocar em
 * loop, mantendo o mesmo espaço reservado no layout).
 */
export default function LoginIllustration() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div aria-hidden="true" className="login-illustration pointer-events-none w-full max-w-[280px] xl:max-w-[320px]">
      <Lottie
        key={prefersReducedMotion ? 'reduced-motion' : 'motion'}
        src={animationData}
        loop={!prefersReducedMotion}
        autoplay={!prefersReducedMotion}
        className="h-full w-full"
      />
    </div>
  )
}
