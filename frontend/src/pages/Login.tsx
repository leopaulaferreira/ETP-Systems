import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Building2, ChevronDown, Eye, EyeOff, Globe, Lock, Mail, ShieldCheck, User } from 'lucide-react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Checkbox from '../components/ui/Checkbox'
import { GoogleIcon, MicrosoftIcon } from '../components/BrandIcons'
import loginBg from '../assets/login-bg.png'

type AccountType = 'colaborador' | 'empresa'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Login() {
  const navigate = useNavigate()
  const [accountType, setAccountType] = useState<AccountType>('colaborador')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const nextErrors: { email?: string; password?: string } = {}
    if (!email) nextErrors.email = 'Informe seu e-mail ou login.'
    else if (!emailPattern.test(email)) nextErrors.email = 'Digite um e-mail válido.'
    if (!password) nextErrors.password = 'Informe sua senha.'
    else if (password.length < 6) nextErrors.password = 'A senha deve ter pelo menos 6 caracteres.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      navigate('/dashboard')
    }, 1200)
  }

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-[#0b0f2c]">
      <img
        src={loginBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[left_top]"
        draggable={false}
      />

      <div className="relative z-10 flex h-full w-full">
        {/* Painel de marca */}
        <div className="relative hidden h-full flex-col justify-between overflow-hidden px-12 py-12 lg:flex lg:w-[55%] xl:px-20 xl:py-16">
          <div className="relative z-10" />

          <div className="relative z-10 -mt-7 flex max-w-xl flex-col gap-5">
            <span className="inline-flex w-fit items-center rounded-full border border-cyan-200/25 bg-white/[0.06] px-4 py-1.5 text-sm text-white backdrop-blur-sm">
              Conhecimento para avançar.
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white text-balance xl:text-5xl">
              Impulsione sua carreira com{' '}
              <span className="bg-gradient-to-r from-white via-cyan-200 to-brand-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(34,195,238,0.55)]">
                conhecimento que transforma.
              </span>
            </h1>
            <p className="max-w-md text-[15px] leading-relaxed text-white">
              Plataforma completa para desenvolver habilidades, conquistar certificações e acelerar
              resultados.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-2 text-xs text-white">
            <ShieldCheck className="h-4 w-4 text-brand-cyan-400" />
            Ambiente seguro e confiável para seu aprendizado.
          </div>
        </div>

        {/* Painel de autenticação */}
        <div className="flex h-full w-full flex-1 flex-col overflow-y-auto">
          <div className="flex items-center justify-end px-6 pt-6 lg:px-10">
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.05] px-3 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Globe className="h-4 w-4 text-white/50" />
              Português
              <ChevronDown className="h-3.5 w-3.5 text-white/40" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-8 lg:items-start lg:pl-6 lg:pr-6 xl:pl-14 xl:pr-10">
            <div className="w-full max-w-[408px] rounded-lg bg-white/10 p-8 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.65)] backdrop-blur-2xl backdrop-saturate-150">
              <div className="mb-6 flex flex-col gap-1.5 text-center">
                <h2 className="text-3xl font-bold text-white">Continue sua jornada</h2>
                <p className="text-sm text-white/75">Entre para continuar aprendendo.</p>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] p-1">
                <button
                  type="button"
                  onClick={() => setAccountType('colaborador')}
                  className={`flex flex-col items-center justify-center gap-0.5 rounded-lg px-2 py-2 text-[11px] font-medium leading-tight transition-colors sm:flex-row sm:gap-1 sm:px-1.5 sm:text-[13px] ${
                    accountType === 'colaborador'
                      ? 'bg-gradient-to-r from-brand-blue-600 to-brand-cyan-500 text-white shadow-sm'
                      : 'text-white/75 hover:text-white/95'
                  }`}
                >
                  <User className="h-4 w-4 shrink-0" />
                  Sou colaborador
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('empresa')}
                  className={`flex flex-col items-center justify-center gap-0.5 rounded-lg px-2 py-2 text-[11px] font-medium leading-tight transition-colors sm:flex-row sm:gap-1 sm:px-1.5 sm:text-[13px] ${
                    accountType === 'empresa'
                      ? 'bg-gradient-to-r from-brand-blue-600 to-brand-cyan-500 text-white shadow-sm'
                      : 'text-white/75 hover:text-white/95'
                  }`}
                >
                  <Building2 className="h-4 w-4 shrink-0" />
                  Sou empresa / RH
                </button>
              </div>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                <Input
                  id="email"
                  label="E-mail ou login"
                  type="email"
                  placeholder="seu@email.com"
                  icon={<Mail className="h-4 w-4" />}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  error={errors.email}
                  autoComplete="username"
                  tone="dark"
                />

                <Input
                  id="password"
                  label="Senha"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••••"
                  icon={<Lock className="h-4 w-4" />}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  error={errors.password}
                  autoComplete="current-password"
                  tone="dark"
                  trailing={
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="text-white/50 hover:text-white/90"
                      aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  }
                />

                <div className="flex items-center justify-between">
                  <Checkbox
                    id="remember"
                    label="Lembrar de mim"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    tone="dark"
                  />
                  <a href="#" className="text-sm font-medium text-brand-cyan-400 hover:text-white hover:underline">
                    Esqueci minha senha
                  </a>
                </div>

                <Button type="submit" loading={loading} className="mt-1 w-full">
                  {!loading && (
                    <>
                      Entrar na plataforma
                      <span aria-hidden="true" className="ml-1.5">→</span>
                    </>
                  )}
                </Button>
              </form>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-white/55">ou continue com</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <SocialButton icon={<GoogleIcon />} label="Google" />
                <SocialButton icon={<MicrosoftIcon />} label="Microsoft" />
              </div>

              <p className="mt-8 text-center text-sm text-white/75">
                Ainda não tem uma conta?{' '}
                <a href="#" className="font-semibold text-brand-cyan-400 hover:text-white hover:underline">
                  Criar conta ›
                </a>
              </p>
            </div>

            <div className="flex w-full max-w-[408px] flex-col items-center gap-2.5 text-center">
              <div className="flex items-center gap-1.5 text-xs text-white/70">
                <Lock className="h-3.5 w-3.5" />
                Seus dados estão protegidos com criptografia de ponta a ponta.
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <a href="#" className="hover:text-white/80 hover:underline">
                  Política de Privacidade
                </a>
                <span>·</span>
                <a href="#" className="hover:text-white/80 hover:underline">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-2 py-2.5 text-sm font-medium text-white/85 backdrop-blur-sm transition-colors hover:bg-white/10"
    >
      {icon}
      <span>{label}</span>
    </button>
  )
}
