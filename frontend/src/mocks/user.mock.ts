/** Mock do usuário autenticado — ainda não há integração com a API real. */
export type CurrentUser = {
  name: string
  role: string
  notificationCount: number
}

export const currentUser: CurrentUser = {
  name: 'João Silva',
  role: 'Aprendiz',
  notificationCount: 3,
}
