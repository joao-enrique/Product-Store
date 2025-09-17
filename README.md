# 🛒 Product Store

<a href="https://product-store-ir63.onrender.com/">Projeto aqui</a>

Um sistema completo de gerenciamento de produtos desenvolvido com **PostgreSQL, Express, React e Node.js (PERN Stack)**.  
O projeto foi criado com foco em **CRUD (Create, Read, Update, Delete)** de produtos, utilizando boas práticas de desenvolvimento, integração entre front-end e back-end e persistência de dados em banco relacional.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React, Tailwind CSS, Axios  
- **Backend:** Node.js, Express, Cors, Helmet, Morgan  
- **Banco de Dados:** PostgreSQL  
- **Gerenciamento de Estado:** Zustand 

---

## 📂 Estrutura do Projeto

product-store/
│── backend/ # API Node + Express
│ ├── config/ # Configuração do banco
│ ├── routes/ # Rotas da aplicação
│ ├── controllers/ # Lógica de negócio
│ └── server.js # Arquivo principal do servidor
│
│── frontend/ # Aplicação React
│ ├── src/
│ │ ├── components/ # Componentes reutilizáveis
│ │ ├── pages/ # Páginas principais
│ │ ├── store/ # Gerenciamento de estado (Zustand)
│ │ └── App.jsx # Arquivo principal do React
│
└── README.md # Documentação do projeto

---

## ⚙️ Funcionalidades

- ✅ Cadastrar novos produtos  
- ✅ Listar todos os produtos  
- ✅ Editar informações de um produto  
- ✅ Remover produtos do sistema  
- ✅ Persistência de dados no PostgreSQL  
- ✅ Interface simples e responsiva  

---

## 📦 Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash

git clone https://github.com/seu-usuario/product-store.git
cd product-store
npm run dev
cd frontend
npm run dev

```

## 🔗 Rotas da API

- GET /api/products → Lista todos os produtos

- POST /api/products → Cria um novo produto

- PUT /api/products/:id → Atualiza um produto

- DELETE /api/products/:id → Remove um produto

🛠️ Futuras Melhorias

 Autenticação de usuários (login/logout)

 Upload de imagens para os produtos

 Testes automatizados

👨‍💻 Autor

Feito com 💙 por João Enrique

