# Cadastro de usuários 📋

Este é um projeto de CRUD simples de cadastro de usuários, criado para praticar e aplicar meus conhecimentos em **React** para o frontend e **Node.js/Express** para o backend, utilizando o **MongoDB** como banco de dados.

**Link para o projeto hospedado**: [Cadastro de Usuários - Projeto Hospedado](https://cadastro-de-usuarios-ruby.vercel.app)

---

## Objetivo do projeto

O principal objetivo deste projeto foi criar uma aplicação web onde é possível cadastrar, listar, editar e excluir usuários. A aplicação foi dividida em duas partes: o **frontend** (em React) e o **backend** (em Node.js com Express). A estrutura do projeto está organizada de forma simples, com as pastas `cadastro` para o frontend e `API` para o backend.

---

## Tecnologias usadas

### Frontend
- **React**: Usado para criar a interface do usuário. Aprendi muito sobre a gestão de estados com hooks (`useState`, `useEffect`) e como trabalhar com componentes funcionais.
- **Axios**: Usei o Axios para enviar e receber dados do backend, como cadastrar e listar os usuários.
- **Vite**: Ferramenta de build para o React, que é muito mais rápida que o Webpack e ajudou a otimizar o processo de desenvolvimento.

### Backend
- **Node.js**: O backend foi desenvolvido em Node.js, que executa o código JavaScript no servidor.
- **Express**: Para facilitar a criação das rotas da API e o gerenciamento das requisições HTTP.
- **Prisma**: Utilizei o Prisma como ORM para interagir com o banco de dados **MongoDB**. Foi muito útil para tornar as consultas ao banco mais simples e seguras.
- **MongoDB**: Banco de dados utilizado para armazenar as informações dos usuários (nome, idade, email). MongoDB é uma base de dados NoSQL que armazena dados em formato de documentos JSON, proporcionando flexibilidade e escalabilidade.

---

## Funcionalidades

Aqui estão as funcionalidades que implementei:

1. **Cadastro de Usuário**: O usuário pode preencher um formulário com nome, idade e email, e esses dados são enviados para o backend para serem armazenados no banco de dados.
2. **Exibição de Usuários**: A lista de usuários cadastrados é exibida na tela. Os dados são recebidos do backend e renderizados na interface do frontend.
3. **Edição de Usuário**: O usuário pode editar seus dados (nome, idade, email) e salvar as alterações, que são refletidas no banco de dados.
4. **Exclusão de Usuário**: O usuário pode ser removido da lista, tanto no frontend quanto no banco de dados.

---

## Desafios e aprendizados

Durante o desenvolvimento, encontrei alguns desafios que acabaram virando boas oportunidades de aprendizado. Por exemplo, no começo foi complicado configurar a comunicação entre o frontend e o backend. Tive que garantir que as URLs estivessem certinhas, tanto no desenvolvimento quanto na produção.

Trabalhar com **Prisma** e **MongoDB** também foi um processo interessante. O Prisma é mais usado com bancos relacionais, mas ele funcionou bem com o Mongo, o que ajudou a facilitar o trabalho com o banco de dados.

---

## O que aprendi

- **React**: Aprendi muito sobre gerenciar estados com hooks e como melhorar a organização do código com componentes menores e reutilizáveis. A renderização dos componentes ficou mais intuitiva também.

- **Node.js e Express**: Ganhei mais confiança criando APIs e servidores, lidando com rotas e middleware, e também aprendi a retornar respostas em JSON para o frontend.

- **Banco de Dados**: O Prisma foi um grande aliado para facilitar o trabalho com o MongoDB, tornando as queries mais simples e garantindo que os dados se mantivessem organizados.
