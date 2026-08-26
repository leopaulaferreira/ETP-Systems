import { useEffect, useState } from 'react'
import { Lottie } from 'lottie-react'
import animationData from '../../../assets/animations/dashboard-hero.json'

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
 * Ilustração do hero da Dashboard.
 *
 * Animação Lottie local ("Graduation" — src/assets/animations/dashboard-hero.json),
 * solta no canto do hero: sem card, fundo ou sombra próprios. Some em telas
 * pequenas para não comprometer o texto de boas-vindas, e some em telas
 * médias/grandes. Respeita prefers-reduced-motion: quando ativo, fica
 * parada no primeiro quadro em vez de tocar em loop.
 */
export default function WelcomeIllustration() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div
      aria-hidden="true"
      className="hidden max-w-[420px] shrink-0 md:block md:h-[190px] md:w-[190px] lg:h-[210px] lg:w-[210px] xl:h-[230px] xl:w-[230px]"
    >
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
