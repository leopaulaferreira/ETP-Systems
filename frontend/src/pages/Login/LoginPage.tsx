import { type FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  Eye,
  EyeOff,
  Globe,
  GraduationCap,
  Lock,
  Mail,
  Route,
  ShieldCheck,
  TrendingUp,
  User,
} from 'lucide-react'
import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Checkbox from '../../components/ui/Checkbox'
import { GoogleIcon, MicrosoftIcon } from './components/BrandIcons'
import LoginBackdrop from './components/LoginBackdrop'
import LoginIllustration from './components/LoginIllustration'
import { useAuth } from '../../auth/AuthContext'
import etpSymbol from '../../assets/etp-symbol.svg'
import { languageOptions, loginTranslations, type Locale } from './loginTranslations'
import './login.css'

type AccountType = 'colaborador' | 'empresa'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const featureIcons = [GraduationCap, Route, BadgeCheck, TrendingUp]
const featureAccentClasses = [
  'border-cyan-200/15 bg-cyan-300/[0.07] text-cyan-200',
  'border-cyan-300/15 bg-cyan-400/[0.07] text-cyan-300',
  'border-sky-400/15 bg-sky-500/[0.07] text-sky-400',
  'border-blue-400/15 bg-blue-500/[0.08] text-blue-400',
]

function getInitialLocale(): Locale {
  const savedLocale = window.localStorage.getItem('etp-locale')
  return languageOptions.some(({ locale }) => locale === savedLocale) ? (savedLocale as Locale) : 'pt-BR'
}

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false)
  const [accountType, setAccountType] = useState<AccountType>('colaborador')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const copy = loginTranslations[locale]
  const selectedLanguage = languageOptions.find((language) => language.locale === locale) ?? languageOptions[0]

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem('etp-locale', locale)
  }, [locale])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const nextErrors: { email?: string; password?: string } = {}
    if (!email) nextErrors.email = copy.errors.emailRequired
    else if (!emailPattern.test(email)) nextErrors.email = copy.errors.emailInvalid
    if (!password) nextErrors.password = copy.errors.passwordRequired
    else if (password.length < 6) nextErrors.password = copy.errors.passwordLength

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      // Autenticação MOCK: não há validação real de credenciais nem chamada de API.
      login()
      navigate('/dashboard', { replace: true })
    }, 1200)
  }

  function handleLanguageSelect(nextLocale: Locale) {
    setLocale(nextLocale)
    setLanguageMenuOpen(false)
    setErrors({})
  }

  return (
    <main className="login-shell relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#030817]">
      <LoginBackdrop />

      <header className="login-header absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-8 lg:px-12 lg:py-7 xl:px-20">
        <div className="flex items-center gap-3" aria-label="ETP Systems">
          <img src={etpSymbol} alt="" className="h-[42px] w-[42px] shrink-0 object-contain sm:h-[46px] sm:w-[46px]" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[28px] font-[480] tracking-[-0.055em] text-white sm:text-[31px]">etp</span>
            <span className="mt-0.5 pl-0.5 text-[7px] font-semibold uppercase tracking-[0.42em] text-white/50">
              systems
            </span>
          </div>
        </div>

        <div
          className="relative"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setLanguageMenuOpen(false)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setLanguageMenuOpen(false)
          }}
        >
          <button
            type="button"
            aria-label={`${copy.languageSelector}. ${selectedLanguage.nativeName}`}
            aria-haspopup="menu"
            aria-expanded={languageMenuOpen}
            onClick={() => setLanguageMenuOpen((open) => !open)}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-medium text-white/75 backdrop-blur-md transition-[border-color,background-color,color] duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/35 sm:min-w-36 sm:px-4 sm:text-sm motion-reduce:transition-none"
          >
            <Globe className="h-4 w-4 text-cyan-300/70" />
            <span className="hidden flex-1 text-left sm:inline">{selectedLanguage.nativeName}</span>
            <span className="sm:hidden">{selectedLanguage.code.split('-')[0]}</span>
            <ChevronDown
              className={`h-3.5 w-3.5 text-white/40 transition-transform duration-200 motion-reduce:transition-none ${languageMenuOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {languageMenuOpen && (
            <div
              role="menu"
              aria-label={copy.languageSelector}
              className="login-language-menu absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-white/12 bg-[#0d1633]/98 p-1.5 shadow-[0_24px_60px_-22px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
            >
              {languageOptions.map((language) => {
                const isSelected = language.locale === locale

                return (
                  <button
                    key={language.locale}
                    type="button"
                    role="menuitemradio"
                    aria-checked={isSelected}
                    onClick={() => handleLanguageSelect(language.locale)}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300/30 motion-reduce:transition-none ${
                      isSelected
                        ? 'bg-white/[0.09] text-white'
                        : 'text-white/65 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span className="w-9 text-[10px] font-semibold tracking-wider text-white/35">{language.code}</span>
                    <span className="flex-1 text-sm font-medium">{language.nativeName}</span>
                    {isSelected && <Check className="h-4 w-4 text-cyan-300/80" />}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </header>

      <div className="login-main relative z-10 flex h-full w-full pt-[84px] lg:pt-[96px]">
        {/* Painel de marca */}
        <section className="login-brand-panel relative hidden h-full flex-col justify-between overflow-hidden px-12 pb-10 pt-12 min-[1180px]:flex min-[1180px]:w-[52%] xl:px-20 xl:pb-14 xl:pt-16">
          <div className="login-brand-copy relative z-10 flex max-w-[620px] flex-1 flex-col justify-center gap-6 pb-4">
            <h1 className="text-balance text-[44px] font-[650] leading-[1.065] tracking-[-0.042em] text-white xl:text-[54px] 2xl:text-[58px]">
              {copy.headline}{' '}
              <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {copy.headlineAccent}
              </span>
            </h1>

            <p className="max-w-lg text-[15.5px] leading-[1.68] text-slate-200/70 xl:text-base">
              {copy.description}
            </p>

            <LoginIllustration />
          </div>

          <div className="login-brand-footer relative z-10 flex flex-col gap-4">
            <ul className="login-features grid w-full max-w-[600px] grid-cols-4 divide-x divide-white/[0.08]">
              {copy.features.map((feature, index) => {
                const Icon = featureIcons[index] ?? GraduationCap
                const accentClass = featureAccentClasses[index] ?? featureAccentClasses[0]

                return (
                  <li
                    key={feature.title}
                    className="login-feature group flex min-w-0 flex-col items-center px-3 text-center first:pl-0 last:pr-0"
                  >
                    <span
                      className={`login-feature-icon mb-3 flex h-10 w-10 items-center justify-center rounded-[13px] border transition-[transform,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_24px_-12px_currentColor] motion-reduce:transform-none motion-reduce:transition-none ${accentClass}`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="text-xs font-semibold leading-4 text-white/82 xl:text-[13px]">
                      {feature.title}
                    </span>
                    <span className="login-feature-subtitle mt-0.5 text-[10.5px] leading-4 text-white/50 xl:text-[11.5px]">
                      {feature.subtitle}
                    </span>
                  </li>
                )
              })}
            </ul>

            <div className="login-brand-security flex items-center gap-2 text-xs text-white/55">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              {copy.secureLearning}
            </div>
          </div>
        </section>

        {/* Painel de autenticação */}
        <section className="login-auth-panel flex h-full w-full flex-1 overflow-y-auto px-5 py-5 sm:px-8 min-[1180px]:px-6 min-[1180px]:py-4 xl:px-14">
          <div className="login-auth-content my-auto flex w-full flex-col items-center gap-4 min-[1180px]:items-start">
            <div className="login-card w-full max-w-[456px] rounded-[28px] border border-white/[0.12] bg-[#111b3d]/92 p-6 shadow-[0_30px_86px_-34px_rgba(0,0,0,0.88)] backdrop-blur-2xl sm:p-7">
              <div className="login-card-heading mb-5 flex flex-col gap-2 text-left">
                <span className="text-[11.5px] font-bold uppercase tracking-[0.19em] text-cyan-300/90">
                  {copy.welcome}
                </span>
                <h2 className="text-[28px] font-[650] leading-[1.18] tracking-[-0.032em] text-white sm:text-[30px]">
                  {copy.title}
                </h2>
                <p className="text-[14.5px] leading-6 text-white/68">{copy.subtitle}</p>
              </div>

              <div
                className="login-access-tabs mb-5 grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-black/10 p-1"
                aria-label={copy.accessType}
              >
                <button
                  type="button"
                  onClick={() => setAccountType('colaborador')}
                  aria-pressed={accountType === 'colaborador'}
                  className={`flex min-h-10 items-center justify-center gap-2 rounded-xl px-2 text-xs font-medium transition-[background-color,color,box-shadow,transform] duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300/30 motion-reduce:transform-none motion-reduce:transition-none sm:text-[13px] ${
                    accountType === 'colaborador'
                      ? 'bg-white/[0.12] text-white shadow-sm ring-1 ring-inset ring-white/10'
                      : 'text-white/55 hover:bg-white/[0.04] hover:text-white/85'
                  }`}
                >
                  <User className="h-4 w-4 shrink-0" />
                  {copy.collaborator}
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('empresa')}
                  aria-pressed={accountType === 'empresa'}
                  className={`flex min-h-10 items-center justify-center gap-2 rounded-xl px-2 text-xs font-medium transition-[background-color,color,box-shadow,transform] duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300/30 motion-reduce:transform-none motion-reduce:transition-none sm:text-[13px] ${
                    accountType === 'empresa'
                      ? 'bg-white/[0.12] text-white shadow-sm ring-1 ring-inset ring-white/10'
                      : 'text-white/55 hover:bg-white/[0.04] hover:text-white/85'
                  }`}
                >
                  <Building2 className="h-4 w-4 shrink-0" />
                  {copy.company}
                </button>
              </div>

              <form className="login-form flex flex-col gap-3.5" onSubmit={handleSubmit} noValidate>
                <Input
                  id="email"
                  label={copy.email}
                  type="email"
                  placeholder={copy.emailPlaceholder}
                  icon={<Mail className="h-4 w-4" />}
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value)
                    if (errors.email) setErrors((current) => ({ ...current, email: undefined }))
                  }}
                  error={errors.email}
                  autoComplete="username"
                  tone="dark"
                />

                <Input
                  id="password"
                  label={copy.password}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••"
                  icon={<Lock className="h-4 w-4" />}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value)
                    if (errors.password) setErrors((current) => ({ ...current, password: undefined }))
                  }}
                  error={errors.password}
                  autoComplete="current-password"
                  tone="dark"
                  trailing={
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="rounded-md text-white/50 transition-colors hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/35 motion-reduce:transition-none"
                      aria-label={showPassword ? copy.hidePassword : copy.showPassword}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  }
                />

                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                  <Checkbox
                    id="remember"
                    label={copy.keepConnected}
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    tone="dark"
                    className="text-[13.5px] font-medium"
                  />
                  <a
                    href="#"
                    className="rounded-sm text-[13.5px] font-medium text-white/66 transition-colors hover:text-white/90 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/35 motion-reduce:transition-none"
                  >
                    {copy.recoverPassword}
                  </a>
                </div>

                <Button
                  type="submit"
                  loading={loading}
                  loadingLabel={copy.submitting}
                  className="login-submit-button group mt-0.5 min-h-[50px] w-full shadow-[0_14px_36px_-16px_rgba(37,99,235,0.9)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-16px_rgba(37,99,235,0.95)]"
                >
                  {!loading && (
                    <>
                      {copy.submit}
                      <span
                        aria-hidden="true"
                        className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                      >
                        →
                      </span>
                    </>
                  )}
                </Button>
              </form>

              <div className="login-divider my-[22px] flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-white/52">{copy.socialDivider}</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <SocialButton icon={<GoogleIcon />} label="Google" />
                <SocialButton icon={<MicrosoftIcon />} label="Microsoft" />
              </div>

              <p className="login-signup mt-6 text-center text-sm text-white/66">
                {copy.firstAccess}{' '}
                <a
                  href="#"
                  className="rounded-sm font-semibold text-white/78 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/35 motion-reduce:transition-none"
                >
                  {copy.createAccount} ›
                </a>
              </p>
            </div>

            <div className="login-auth-footer flex w-full max-w-[456px] flex-col items-center gap-2.5 px-2 text-center">
              <div className="flex items-center gap-1.5 text-xs text-white/60">
                <Lock className="h-3.5 w-3.5" />
                {copy.protectedAccess}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-white/58">
                <a
                  href="#"
                  className="rounded-sm transition-colors hover:text-white/75 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/35 motion-reduce:transition-none"
                >
                  {copy.privacy}
                </a>
                <span>·</span>
                <a
                  href="#"
                  className="rounded-sm transition-colors hover:text-white/75 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/35 motion-reduce:transition-none"
                >
                  {copy.terms}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.045] px-2 py-2.5 text-sm font-medium text-white/75 transition-[transform,border-color,background-color,color] duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/30 motion-reduce:transform-none motion-reduce:transition-none"
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
