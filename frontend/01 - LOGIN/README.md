# Frontend - ETP Systems

Interface web do ETP Systems, construída em **React + TypeScript + Vite + Tailwind CSS**.

## Stack

- **React 19** + **TypeScript**
- **Vite** — build e dev server
- **Tailwind CSS v4** — estilos e tokens da tela definidos em `01 - LOGIN/login.css`
- **lucide-react** — ícones

## Como rodar

```bash
cd "01 - LOGIN"
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Estrutura

```
frontend/
└── 01 - LOGIN/              # projeto executável da primeira tela
    ├── componentes/
    │   ├── BrandIcons.tsx
    │   ├── Button.tsx
    │   ├── Checkbox.tsx
    │   ├── Input.tsx
    │   └── LoginBackdrop.tsx
    ├── etp-symbol.svg
    ├── favicon.svg
    ├── index.html
    ├── login.css
    ├── loginTranslations.ts
    ├── Login.tsx
    ├── main.tsx
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── tsconfig.json
    └── vite.config.js
```

Todos os arquivos necessários para executar a primeira tela estão contidos em `01 - LOGIN`. A raiz de `frontend` mantém somente esse diretório.

## Status atual

- [x] **Login** (`/`) — autenticação com validação, mostrar/ocultar senha, loading, login social (visual)
- [ ] Demais telas ainda serão definidas e adicionadas posteriormente

O front-end ainda não está integrado a uma API real — os dados são fictícios/estáticos por enquanto.
