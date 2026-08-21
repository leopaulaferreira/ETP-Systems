# Frontend - ETP Systems

Interface web do ETP Systems, construída em **React + TypeScript + Vite + Tailwind CSS**.

## Stack

- **React 19** + **TypeScript**
- **Vite** — build e dev server
- **Tailwind CSS v4** — design tokens (cores, tipografia, espaçamento) definidos em `src/index.css`
- **React Router** — navegação entre telas
- **lucide-react** — ícones

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Estrutura

```
frontend/
├── src/
│   ├── assets/        # imagens e ilustrações
│   ├── components/
│   │   ├── ui/         # componentes reutilizáveis (Button, Input, Checkbox...)
│   │   ├── Logo.tsx
│   │   └── BrandIcons.tsx
│   ├── pages/          # telas da aplicação (uma por rota)
│   ├── App.tsx          # definição de rotas
│   ├── main.tsx
│   └── index.css        # design tokens (cores navy/azul/ciano, tipografia, sombra)
└── index.html
```

## Status atual

- [x] **Login** (`/`) — autenticação com validação, mostrar/ocultar senha, loading, login social (visual)
- [ ] Dashboard e demais telas autenticadas (fora do escopo desta etapa)

O front-end ainda não está integrado a uma API real — os dados são fictícios/estáticos por enquanto.
