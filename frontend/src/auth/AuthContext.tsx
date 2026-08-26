import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { readMockSession, writeMockSession } from './auth.mock'

type AuthContextValue = {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

/**
 * Provedor de autenticação do protótipo — implementação MOCK.
 *
 * Não valida credenciais nem fala com nenhuma API: existe apenas para que
 * rotas públicas/protegidas e o fluxo de login/logout funcionem de ponta a
 * ponta antes do backend (Spring Security/JWT) estar disponível.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(readMockSession)

  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated,
      login: () => {
        writeMockSession(true)
        setIsAuthenticated(true)
      },
      logout: () => {
        writeMockSession(false)
        setIsAuthenticated(false)
      },
    }),
    [isAuthenticated],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  return context
}
