<h1 align="left">✨ CRUD utilizando modelo PERN ✨</h1>

![Demo App](preview-for-project.png)

<p align="left">
  <b>Um CRUD moderno e escalável utilizando a stack PERN, estilizado com TailwindCSS e DaisyUI.</b>
</p>

---

## 🚀 Tecnologias utilizadas

- 🌟 **PERN Stack** → PostgreSQL + Express + React + Node.js  
- 🎨 **UI/UX** → TailwindCSS + DaisyUI  
- 🛡 **Segurança** → Limitação de taxa e detecção de bots com Arcjet  
- ⚡ **Gerenciamento de estado** → Zustand  
- 🐞 **Tratamento de erros** → Cliente e servidor  
- ⏳ **Performance & DX** → Hot reload, boas práticas e muito mais  

<div align="right">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" alt="postgresql logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
</div>


---

## ⚙️ Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```js
PORT=3000

PGUSER=...
PGPASSWORD=...
PGHOST=...
PGDATABASE=...

ARCJET_KEY=...
ARCJET_ENV=development
```

# ▶️ Como rodar o projeto
### 🔹 Backend (API)

Na raiz do projeto, rode:

```shell
npm install
npm run start
npm run dev
```

### 🔹 Frontend

Entre na pasta frontend e rode:

```shell
cd frontend
npm install
npm run dev
```

O frontend estará disponível em: http://localhost:5173 (ou a porta definida pelo Vite)

# 📂 Estrutura do projeto
├── backend/          # Código da API (Node.js + Express)
├── frontend/         # Aplicação cliente (React + Vite)
├── preview-for-project.png
├── .env.example      # Exemplo de configuração de variáveis de ambiente
└── README.md         <- Aqui está você 😁

# ✅ Funcionalidades
- Criar, listar, atualizar e excluir registros (CRUD completo)
- Feedback visual para erros e requisições
- Proteção contra bots e abuso de API
- Integração entre frontend e backend via REST

# 📜 Licença
Este projeto é open-source sob a licença MIT.
Sinta-se à vontade para usar, modificar e contribuir! 🚀

# 🐱‍💻 Autor
Feito com 💙 por João Enrique
<div align="right">
  <a href="https://www.linkedin.com/in/joao-enrique-dev/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin logo"  />
  </a>
  <a href="https://www.youtube.com/@joaocodedev" target="_blank">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="youtube logo"  />
  </a>
  <a href="https://jedev1.itch.io/" target="_blank">
    <img src="https://img.shields.io/badge/Itch.io-FA5C5C?style=for-the-badge&logo=itchdotio&logoColor=white" alt="itch logo"  />
  </a>
  <a href="https://www.instagram.com/joao__dev/" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="instagram logo"  />
  </a>
  <a href="https://www.tiktok.com/@joao__code" target="_blank">
    <img src="https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white" alt="tiktok logo"  />
  </a>
</div>