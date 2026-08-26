import { Navigate, Route, Routes } from 'react-router-dom'
import RequireAuth from '../../auth/RequireAuth'
import AppLayout from '../../layouts/AppLayout'
import LoginPage from '../../pages/Login/LoginPage'
import DashboardPage from '../../pages/Dashboard/DashboardPage'
import TrilhasPage from '../../pages/Trilhas/TrilhasPage'
import ComingSoonPage from '../../pages/ComingSoonPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<RequireAuth />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/trilhas" element={<TrilhasPage />} />
          <Route path="/cursos" element={<ComingSoonPage />} />
          <Route path="/meus-cursos" element={<ComingSoonPage />} />
          <Route path="/avaliacoes" element={<ComingSoonPage />} />
          <Route path="/certificados" element={<ComingSoonPage />} />
          <Route path="/relatorios" element={<ComingSoonPage />} />
          <Route path="/perfil" element={<ComingSoonPage />} />
          <Route path="/configuracoes" element={<ComingSoonPage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
