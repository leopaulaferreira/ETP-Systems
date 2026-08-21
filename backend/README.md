# Backend - ETP Systems

Esta pasta contém o **Back-end do sistema ETP Systems**.

O back-end é responsável por toda a **lógica da aplicação**, comunicação com o banco de dados e fornecimento de dados para o front-end através de **APIs**.

---

## 📌 Responsabilidades do Back-end

- Implementar as **regras de negócio** do sistema
- Gerenciar **usuários e autenticação**
- Controlar **cursos e progresso dos usuários**
- Conectar com o **banco de dados**
- Fornecer **APIs para o Front-end**

---

## ⚙️ Tecnologias previstas

O projeto pode utilizar uma das seguintes tecnologias:

- **Java + Spring Boot**
ou
- **Node.js**

Banco de dados:

- **MySQL**

---

## 📂 Estrutura inicial sugerida
backend
│
├── src
│
├── controllers
│
├── services
│
├── models
│
├── repositories
│
└── config

### Descrição das pastas

**controllers**  
Responsáveis por receber as requisições da API.

**services**  
Contêm a lógica de negócio da aplicação.

**models**  
Representam as entidades do sistema (Usuário, Curso, etc.).

**repositories**  
Responsáveis pela comunicação com o banco de dados.

**config**  
Configurações da aplicação.

---

## 🚀 Objetivo desta camada

Fornecer uma **API segura e eficiente** para o funcionamento da plataforma **ETP Systems**.

O backend será responsável por garantir que os dados sejam **processados, armazenados e disponibilizados corretamente para o front-end**.
