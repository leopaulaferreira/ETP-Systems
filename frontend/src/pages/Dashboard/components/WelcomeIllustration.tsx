import dashboardHeroLearning from '../../../assets/illustrations/dashboard-hero-learning-dark.webp'

export default function WelcomeIllustration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-5 top-1/2 hidden h-[238px] w-[500px] -translate-y-1/2 xl:block"
    >
      <img
        src={dashboardHeroLearning}
        alt=""
        className="h-full w-full object-contain object-right drop-shadow-[0_18px_24px_rgba(37,99,235,0.1)]"
      />
    </div>
  )
}
