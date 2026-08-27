import loginHeroLearning from '../../../assets/illustrations/login-hero-learning.webp'

/**
 * Ilustração decorativa do painel de marca do Login.
 *
 * Asset estático local, puramente decorativo e sem dependência de hotlink.
 */
export default function LoginIllustration() {
  return (
    <div
      aria-hidden="true"
      className="login-illustration pointer-events-none w-full max-w-[280px] xl:max-w-[300px]"
    >
      <img
        src={loginHeroLearning}
        alt=""
        width="849"
        height="900"
        className="h-auto w-full object-contain drop-shadow-[0_24px_34px_rgba(0,185,255,0.12)]"
      />
    </div>
  )
}
