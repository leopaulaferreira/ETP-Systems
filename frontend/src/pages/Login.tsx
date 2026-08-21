import { type FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Building2, Eye, EyeOff, Globe, Lock, Mail, ShieldCheck, User } from 'lucide-react'
import Logo from '../components/Logo'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Checkbox from '../components/ui/Checkbox'
import { GoogleIcon, LinkedInIcon, MicrosoftIcon } from '../components/BrandIcons'
import heroImage from '../assets/login-hero.webp'

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
    <div className="flex h-screen w-full bg-white">
      {/* Painel de marca */}
      <div className="relative hidden h-full w-[47%] flex-col justify-between overflow-hidden bg-[#010826] px-14 py-12 text-white lg:flex">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-bottom"
          draggable={false}
        />

        <div className="relative z-10 flex flex-col gap-4">
          <Logo variant="light" />

          <div className="mt-4 flex flex-col gap-4">
            <h1 className="text-4xl font-bold leading-tight text-balance">
              Impulsione sua carreira com{' '}
              <span className="bg-gradient-to-r from-brand-cyan-400 to-brand-blue-500 bg-clip-text text-transparent">
                conhecimento que transforma.
              </span>
            </h1>
            <p className="max-w-md text-[15px] leading-relaxed text-white/70">
              Plataforma completa para desenvolver
              <br />
              habilidades, conquistar certificações
              <br />
              e acelerar resultados.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-5">
          <div className="flex items-center gap-10">
            <Stat value="+12 mil" label="Alunos ativos" />
            <Stat value="+300" label="Cursos e trilhas" />
            <Stat value="+120" label="Empresas parceiras" />
          </div>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <ShieldCheck className="h-4 w-4 text-brand-cyan-400" />
            Ambiente seguro e confiável para seu aprendizado.
          </div>
        </div>
      </div>

      {/* Painel de autenticação */}
      <div className="flex h-full w-full flex-1 flex-col overflow-y-auto bg-surface lg:bg-white">
        <div className="flex justify-end px-6 pt-6 lg:px-10">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-ink-500 hover:bg-ink-100"
          >
            <Globe className="h-4 w-4" />
            Português
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center px-6 py-8">
          <div className="w-full max-w-md rounded-2xl border border-ink-100 bg-white p-8 shadow-card">
            <div className="mb-6 flex flex-col gap-1.5 text-center">
              <h2 className="text-2xl font-bold text-ink-900">Bem-vindo(a) de volta!</h2>
              <p className="text-sm text-ink-500">Faça login para continuar aprendendo.</p>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-surface-alt p-1.5">
              <button
                type="button"
                onClick={() => setAccountType('colaborador')}
                className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors ${
                  accountType === 'colaborador'
                    ? 'bg-white text-brand-blue-700 shadow-sm ring-1 ring-brand-blue-500'
                    : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                <User className="h-4 w-4" />
                Sou colaborador
                <span className="font-normal text-[11px] text-ink-400">Acessar minha conta</span>
              </button>
              <button
                type="button"
                onClick={() => setAccountType('empresa')}
                className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors ${
                  accountType === 'empresa'
                    ? 'bg-white text-brand-blue-700 shadow-sm ring-1 ring-brand-blue-500'
                    : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                <Building2 className="h-4 w-4" />
                Sou empresa / RH
                <span className="font-normal text-[11px] text-ink-400">Acessar como empresa</span>
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
                trailing={
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="text-ink-400 hover:text-ink-600"
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
                />
                <a href="#" className="text-sm font-medium text-brand-blue-600 hover:underline">
                  Esqueci minha senha
                </a>
              </div>

              <Button type="submit" loading={loading} className="mt-1 w-full">
                {!loading && (
                  <>
                    Entrar na plataforma
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </Button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-ink-200" />
              <span className="text-xs text-ink-400">ou continue com</span>
              <div className="h-px flex-1 bg-ink-200" />
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <SocialButton icon={<GoogleIcon />} label="Google" />
              <SocialButton icon={<MicrosoftIcon />} label="Microsoft" />
              <SocialButton icon={<LinkedInIcon />} label="LinkedIn" />
            </div>

            <p className="mt-6 text-center text-sm text-ink-500">
              Ainda não tem uma conta?{' '}
              <a href="#" className="font-semibold text-brand-blue-600 hover:underline">
                Criar conta ›
              </a>
            </p>
          </div>
        </div>

        <footer className="flex flex-col items-center gap-2 px-6 pb-8 text-center">
          <div className="flex items-center gap-1.5 text-xs text-ink-400">
            <Lock className="h-3.5 w-3.5" />
            Seus dados estão protegidos com criptografia de ponta a ponta.
          </div>
          <div className="flex items-center gap-3 text-xs text-ink-400">
            <a href="#" className="hover:text-ink-600 hover:underline">
              Política de Privacidade
            </a>
            <span>·</span>
            <a href="#" className="hover:text-ink-600 hover:underline">
              Termos de Uso
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xl font-bold text-brand-cyan-400">{value}</span>
      <span className="text-xs text-white/60">{label}</span>
    </div>
  )
}

function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-100"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  )
}
