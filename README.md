# 🌿 APTOGarden - Plataforma de Gestão para Fazenda Urbana

**📚 Disciplina:** Desenvolvimento Web II

**🏫 Instituição:** Universidade Presbiteriana Mackenzie (UPM)

**👨‍💻 Autores:** 
- [Pedro Henrique](https://github.com/pedrohenriquedev)  
- [Nicholas](https://github.com/taldoNicholas)
- [Gabriel Albano](https://github.com/AlbanoDevelope)
- [Tamires Colaço]()
---

## 📖 Descrição

**APTOGarden** é uma aplicação web desenvolvida inicialmente para a disciplina de **Desenvolvimento Web I** e expandida em **Desenvolvimento Web II**, com o objetivo de criar uma **plataforma para gerenciamento de uma fazenda urbana**.

Nesta nova etapa, o sistema está sendo aprimorado com **operações CRUD completas** (Criar, Ler, Atualizar, Deletar), integrando **NestJS, Node.js e MongoDB** no backend. A interface foi planejada no **Figma** com foco em experiência do usuário e responsividade.

---

## ✨ Funcionalidades

- Navegação intuitiva entre as páginas (Início, Sobre, Formulário, Tabela)
- Design responsivo e acessível
- Estruturação de informações em tabela
- Dashboard com estatísticas de vendas e produtos populares
- CRUD completo de:
  - 👥 Usuários
  - 📦 Estoque de Produtos
  - 🚚 Entregadores
- Pesquisa e paginação de dados
- Design responsivo e acessível
- Navegação lateral intuitiva

---

## ⚙️ Tecnologias Utilizadas

### 🎨 Front-end
- HTML5
- CSS3
- JavaScript
- Figma (prototipação da interface)

### 🧠 Back-end
- NestJS
- Node.js
- MongoDB (para estrutura de Banco de Dados)
- Postman (para testes de API)

---

## 🌐 Rotas da Aplicação

### Frontend

| Página        | Caminho              |
|---------------|----------------------|
| Início        | `/index.html`        |
| Sobre         | `/sobre.html`        |
| Formulário    | `/formulario.html`   |
| Tabela        | `/tabela.html`       |

### Backend (NestJS)

| Entidade        | Método  | Rota                   | Descrição                      |
|-----------------|---------|------------------------|-------------------------------|
| Usuários        | GET     | `/users`               | Lista todos os usuários        |
|                 | POST    | `/users`               | Cria um novo usuário           |
|                 | PUT     | `/users/:id`           | Atualiza um usuário específico |
|                 | DELETE  | `/users/:id`           | Deleta um usuário específico   |
| Produtos        | GET     | `/products`            | Lista todos os produtos        |
|                 | POST    | `/products`            | Adiciona novo produto          |
|                 | PUT     | `/products/:id`        | Atualiza um produto            |
|                 | DELETE  | `/products/:id`        | Remove um produto              |
| Entregadores    | GET     | `/deliverers`          | Lista entregadores             |
|                 | POST    | `/deliverers`          | Cadastra entregador            |
|                 | PUT     | `/deliverers/:id`      | Atualiza dados do entregador   |
|                 | DELETE  | `/deliverers/:id`      | Remove entregador              |

> 🔧 Essas rotas podem ser testadas via **Postman** durante a implementação da API.

---

## 🛠️ Simulação das Operações CRUD
A interface foi planejada para simular as operações de **CRUD (Create, Read, Update, Delete)** em três áreas principais:

1. **Usuários**
   - Cadastro de novos usuários
   - Edição e exclusão de registros
   - Tabela com paginação e busca

2. **Estoque**
   - Adição de novos produtos
   - Edição de dados como preço, tipo, quantidade
   - Exclusão de produtos desatualizados

3. **Entregadores**
   - Cadastro e gerenciamento de entregadores
   - Controle de informações como placa, CPF e celular

---

## 📜 Licença 
© 2025 APTOGarden — Todos os direitos reservados.
