# Frontend - ETP Systems

Interface web do ETP Systems, construída em **React + TypeScript + Vite + Tailwind CSS**.

## Stack

- **React 19** + **TypeScript**
- **Vite** — build e dev server
- **Tailwind CSS v4** — estilos e tokens da tela definidos em `02-Dashboard/dashboard.css`
- **lucide-react** — ícones

## Como rodar

```bash
cd "02-Dashboard"
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Estrutura

```
02-Dashboard/
├── componentes/
│   ├── layout/
│   │   ├── AppLayout.tsx
│   │   ├── Sidebar.tsx
│   │   └── Topbar.tsx
│   ├── dashboard/
│   │   ├── WelcomeSection.tsx
│   │   ├── WelcomeIllustration.tsx   # placeholder decorativo, ver comentário no arquivo
│   │   ├── StatsGrid.tsx
│   │   └── MetricCard.tsx
│   └── ui/
│       └── Avatar.tsx
├── dashboard.mock.ts        # dados de exemplo, fora do JSX
├── DashboardPage.tsx
├── dashboard.css
├── etp-symbol.svg
├── favicon.svg
├── index.html
├── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.js
```

Todos os arquivos necessários para executar esta tela estão contidos em `02-Dashboard`.

## Status atual

- [x] **Dashboard — Etapa 1** (`AppLayout`, `Sidebar`, `Topbar`, boas-vindas, cards de métricas)
- [ ] **Dashboard — Etapa 2** (Continuar aprendendo, Recomendações, Conquistas, Certificados, Meu progresso)
- [ ] Demais telas ainda serão definidas e adicionadas posteriormente

O front-end ainda não está integrado a uma API real — os dados são fictícios/estáticos (`dashboard.mock.ts`) por enquanto.
