# 🚀 Sistema de Gestão de Funcionários - Fullstack CRUD

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

## 📋 Sobre o Projeto

Um sistema completo de gestão de funcionários desenvolvido com as melhores práticas que percebi do mercado. Esta aplicação fullstack permite realizar operações CRUD (Create, Read, Update, Delete) em uma interface moderna e responsiva. Todo o código foi organizado visando separar responsabilidades, facilitar a manutenibilidade e a escalabilidade. O intuito inicial foi apenas praticar CRUD usando dessas práticas, mas decidi armazenar e publicar, por ser algo que pode contribuir com a comunidade.

### ✨ Funcionalidades

- ✅ Listar todos os funcionários cadastrados
- ✅ Adicionar novo funcionário com validações
- ✅ Editar informações de funcionários existentes
- ✅ Excluir funcionários com confirmação
- ✅ Visualização detalhada de cada registro
- ✅ Interface responsiva e amigável

## 🏗️ Arquitetura do Projeto

```
📦 crud
├── 📁 backend
│   ├── 📁 src
│   │   ├── 📁 controllers      # Lógica das rotas
│   │   ├── 📁 routes           # Definição das rotas
│   │   ├── 📁 lib              # Configurações (Prisma)
│   │   └── app.ts              # Configuração do Express
│   ├── 📁 prisma
│   │   ├── schema.prisma       # Modelo do banco
│   │   └── migrations          # Migrations do banco
│   └── package.json
│
└── 📁 frontend
    ├── 📁 src
    │   ├── 📁 components       # Componentes React
    │   ├── 📁 pages            # Páginas da aplicação
    │   ├── 📁 hooks            # Hooks personalizados
    │   ├── 📁 services         # Integração com API
    │   ├── 📁 types            # Tipagens TypeScript
    │   └── App.tsx
    └── package.json
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** + **Express** - Servidor e rotas
- **TypeScript** - Tipagem estática
- **Prisma ORM** - Modelagem e migrations
- **PostgreSQL** - Banco de dados
- **CORS** - Segurança de requisições
- **dotenv** - Variáveis de ambiente

### Frontend
- **React** + **TypeScript** - Interface de usuário
- **Vite** - Build e desenvolvimento
- **CSS-in-JS** - Estilização com objetos
- **Fetch API** - Requisições HTTP

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (v18+)
- PostgreSQL
- npm ou yarn

### 🔧 Instalação

#### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/crud.git
cd crud
```

#### 2. Configure o Backend
```bash
cd backend
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações do PostgreSQL

# Execute as migrações e seed
npx prisma migrate dev
npm run seed
```

#### 3. Configure o Frontend
```bash
cd ../frontend
npm install

# Configure a URL da API
# No arquivo src/services/funcionarioService.ts
const API_BASE_URL = 'http://localhost:3000/api';
```

#### 4. Execute a aplicação

**Terminal 1 - Backend**
```bash
cd backend
npm run dev
# Servidor rodando em http://localhost:3000
```

**Terminal 2 - Frontend**
```bash
cd frontend
npm run dev
# Aplicação rodando em http://localhost:5173
```

## 📡 API Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/funcionario` | Lista todos os funcionários |
| GET | `/api/funcionario/:id` | Busca funcionário por ID |
| POST | `/api/funcionario` | Cria novo funcionário |
| PUT | `/api/funcionario/:id` | Atualiza funcionário |
| DELETE | `/api/funcionario/:id` | Remove funcionário |

## 🎯 Exemplo de Uso da API

### Criar um funcionário
```json
POST /api/funcionario
{
    "nome": "João Silva",
    "idade": 30,
    "funcao": "Desenvolvedor Full Stack",
    "contratado_em": "2024-01-15"
}
```

### Resposta de sucesso
```json
{
    "id": "uuid-gerado",
    "nome": "João Silva",
    "idade": 30,
    "funcao": "Desenvolvedor Full Stack",
    "contratado_em": "2024-01-15T00:00:00.000Z",
    "criado_em": "2024-03-08T12:00:00.000Z",
    "atualizado_em": "2024-03-08T12:00:00.000Z"
}
```

## 🎨 Interface do Usuário

### Principais Componentes

- **FuncionarioForm**: Formulário completo com validações
- **FuncionarioList**: Lista organizada de funcionários
- **FuncionarioItem**: Card individual com ações
- **FuncionariosPage**: Página principal integrando tudo

### Estilização
Nesse projeto, pratiquei a estilização inline com objetos JavaScript (CSS in JS)
```typescript
// Estilos organizados por componente
const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px'
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
};
```

## 🧪 Testes

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

## 📈 Próximas Melhorias

- [ ] Autenticação de usuários
- [ ] Paginação na lista
- [ ] Filtros por função/departamento
- [ ] Upload de foto do funcionário
- [ ] Relatórios em PDF
- [ ] Dashboard com estatísticas

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

**Paulo Lima**
- GitHub: [@Pucapuka](https://github.com/Pucapuka)
- LinkedIn: [Dev Paulo Anderson Lima](https://www.linkedin.com/in/dev-pauloandersonlima/)

## ⭐ Agradecimentos

Agradecimento especial à comunidade open source e a todos que possam contribuir com feedbacks durante o desenvolvimento deste projeto.

---

**Desenvolvido com ❤️ e TypeScript**
```