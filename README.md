# ETP Systems
### Plataforma de Aprendizagem para Treinamento Corporativo

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Projeto Acadêmico](https://img.shields.io/badge/projeto-acadêmico-blue)
![Backend](https://img.shields.io/badge/backend-Java%20%7C%20Node.js-orange)
![Frontend](https://img.shields.io/badge/frontend-React%20%7C%20Flutter-blue)
![Database](https://img.shields.io/badge/database-MySQL-lightgrey)

Projeto acadêmico desenvolvido no curso de **Análise e Desenvolvimento de Sistemas** na disciplina **Projeto Integrador (PIN)**.

---

# 📚 Sobre o Projeto

O **ETP Systems** é uma plataforma educacional desenvolvida para apoiar o desenvolvimento profissional de colaboradores do **Banco do Brasil**.

A plataforma oferece **trilhas de aprendizado, treinamentos e certificações**, ajudando novos colaboradores a adquirirem experiência prática e permitindo que profissionais mais experientes evoluam em suas carreiras dentro da organização.

O objetivo é tornar o aprendizado corporativo **mais acessível, organizado e alinhado com os objetivos estratégicos da instituição**.

---

# 🎯 Objetivos do Projeto""

- Fortalecer a **capacitação interna** dos colaboradores  
- Oferecer **trilhas de aprendizado estruturadas**  
- Apoiar **promoções por mérito**  
- Aumentar a **retenção de talentos**  
- Reduzir custos com **recrutamento externo**  
- Alinhar o desenvolvimento profissional às **metas estratégicas do banco**

---

# 👥 Integrantes do Projeto

- Leonardo  
- Miguel  
- Nicolas  
- Matheus  
- Rafael  
- Vinicius  

---

# 🖥️ Funcionalidades do Sistema

## 🔐 Autenticação
- Cadastro de usuário  
- Login com senha  
- Login social  

## 📊 Dashboard
- Acesso rápido aos cursos disponíveis  
- Visualização do progresso do usuário  

## 🎓 Cursos
- Lista de cursos disponíveis  
- Busca e filtros de conteúdo  
- Acompanhamento de cursos em andamento  

---

# 🧱 Arquitetura do Sistema

O sistema será dividido em **três camadas principais**.

## Front-end
Responsável pela **interface do usuário** e comunicação com a API.

## Back-end
Responsável pelas **regras de negócio**, autenticação e gerenciamento de usuários e cursos.

## Banco de Dados
Responsável pelo **armazenamento das informações da aplicação**.

---

# ⚙️ Tecnologias Utilizadas

## Front-end
- React  
ou  
- Flutter Web  

## Back-end
- Node.js  
ou  
- Java Spring Boot  

## Banco de Dados
- MySQL  

## Autenticação
- OAuth 2.0  
- Login social  

## Hospedagem
- AWS  
ou  
- Azure  

## Arquitetura definida

```
┌───────────────┐
│     React     │
│  TypeScript   │
└───────┬───────┘
        │
     REST API
        │
┌───────▼───────┐
│  Spring Boot  │
│               │
│ Controllers   │
│ Services      │
│ Repositories  │
│ Security      │
└───────┬───────┘
        │
    Hibernate
        │
┌───────▼───────┐
│     MySQL     │
└───────────────┘
```

---

# 📂 Estrutura do repositório

```
ETP-Systems/
│
├── backend/
├── frontend/
├── database/
├── docs/
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

A estrutura ainda vai evoluir conforme o projeto avança.

---

# 🚀 Como Executar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/leopaulaferreira/ETP-Systems.git
cd ETP-Systems
```

## 2️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse `http://localhost:5173`.

> Backend e banco de dados ainda serão implementados — por enquanto o front-end roda com dados fictícios.
