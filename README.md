# Cadastro de Usuários 📋

Este é um projeto de CRUD simples para cadastro de usuários com o intuito de praticar e aplicar conhecimentos em **React** para o frontend e **Node.js/Express** para o backend, com o banco de dados **MongoDB**.
**O projeto está hospedado no link**: [Cadastro de Usuários - Projeto Hospedado](https://cadastro-de-usuarios-ruby.vercel.app)

---

## Objetivo do projeto

O principal objetivo deste projeto foi criar uma aplicação web que permita cadastrar, listar, editar e excluir usuários. O projeto foi dividido em duas partes: o **frontend**, desenvolvido em React, e o **backend**, construído com Node.js e Express. A estrutura do projeto está organizada com as pastas `cadastro` para o frontend e `API` para o backend.

---

## Tecnologias utilizadas

### Frontend
- **React**: Utilizado para construir a interface do usuário. O projeto foi uma oportunidade para aprofundar meus conhecimentos sobre gestão de estados com hooks (`useState`, `useEffect`) e a criação de componentes funcionais.
- **Axios**: Usado para comunicação com o backend, realizando requisições HTTP para cadastrar e listar usuários.
- **Vite**: Ferramenta de build para React, que proporciona uma experiência de desenvolvimento mais rápida e eficiente em comparação com o Webpack.

### Backend
- **Node.js**: Utilizado para rodar o código JavaScript no servidor, facilitando a criação de APIs e o gerenciamento de requisições.
- **Express**: Framework para Node.js que simplifica a criação de rotas e o gerenciamento das requisições HTTP.
- **Prisma**: ORM utilizado para interagir com o banco de dados **MongoDB**, facilitando a realização de consultas e a manutenção dos dados de maneira segura e eficiente.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações dos usuários, como nome, idade e e-mail, com flexibilidade e escalabilidade.

---

## Funcionalidades

1. **Cadastro de Usuário**: O usuário pode preencher um formulário com nome, idade e e-mail. Esses dados são enviados para o backend e armazenados no banco de dados.
2. **Exibição de Usuários**: A lista de usuários cadastrados é exibida na tela, com os dados recebidos do backend.
3. **Edição de Usuário**: O usuário pode editar seus dados (nome, idade e e-mail) e salvar as alterações, que são refletidas no banco de dados.
4. **Exclusão de Usuário**: O usuário pode ser removido da lista, tanto no frontend quanto no banco de dados.

---

## Desafios e aprendizados

Durante o desenvolvimento, encontrei alguns desafios, mas também grandes oportunidades de aprendizado:

- **Comunicação entre o Frontend e o Backend**: Inicialmente, tive dificuldades em configurar a comunicação entre as duas partes. A principal tarefa foi garantir que as URLs das requisições estivessem corretas tanto em desenvolvimento quanto em produção.
- **Trabalhando com Prisma e MongoDB**: Embora o Prisma seja mais comumente usado com bancos relacionais, consegui utilizá-lo com sucesso para o MongoDB. Isso simplificou bastante as consultas e garantiu a organização dos dados no banco de dados.

---

## O que aprendi

- **React**: Melhorei minha habilidade em gerenciar estados usando hooks e aprendi a criar componentes mais organizados e reutilizáveis. A renderização dos componentes se tornou mais intuitiva.
- **Node.js e Express**: Aprimorei minha confiança na criação de APIs e servidores, trabalhando com rotas, middleware e retornando respostas em JSON para o frontend.
- **Banco de Dados**: O uso do Prisma com MongoDB me permitiu realizar queries de maneira mais simples e eficiente, além de garantir uma boa organização dos dados.
