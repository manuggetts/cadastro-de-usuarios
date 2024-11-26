# Cadastro de Usuários

Este é um projeto simples de cadastro de usuários, criado para praticar e aplicar meus conhecimentos em **React** para o frontend e **Node.js/Express** para o backend, utilizando o **MongoDB** como banco de dados.

**Link para o projeto hospedado**: [Cadastro de Usuários - Projeto Hospedado](https://cadastro-de-usuarios-ruby.vercel.app)

---

## Objetivo do Projeto

O principal objetivo deste projeto foi criar uma aplicação web onde é possível cadastrar, listar, editar e excluir usuários. A aplicação foi dividida em duas partes: o **frontend** (em React) e o **backend** (em Node.js com Express). A estrutura do projeto está organizada de forma simples, com as pastas `cadastro` para o frontend e `API` para o backend.

---

## Tecnologias Usadas

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

Aqui estão algumas das principais funcionalidades que implementei:

1. **Cadastro de Usuário**: O usuário pode preencher um formulário com nome, idade e email, e esses dados são enviados para o backend para serem armazenados no banco de dados.
2. **Exibição de Usuários**: A lista de usuários cadastrados é exibida na tela. Os dados são recebidos do backend e renderizados na interface do frontend.
3. **Edição de Usuário**: O usuário pode editar seus dados (nome, idade, email) e salvar as alterações, que são refletidas no banco de dados.
4. **Exclusão de Usuário**: O usuário pode ser removido da lista, tanto no frontend quanto no banco de dados.

---

## Desafios e Aprendizados

Durante o desenvolvimento, passei por alguns desafios que foram ótimas oportunidades de aprendizado:

- **Configuração do Ambiente**: No início, tive dificuldades para configurar a comunicação entre o frontend e o backend. Tive que garantir que as URLs estivessem corretas tanto no ambiente de desenvolvimento quanto de produção.

- **Prisma e MongoDB**: Usar o Prisma com o MongoDB foi interessante. Embora o Prisma seja mais comum em bancos relacionais, ele também funciona bem com o MongoDB, o que facilitou o trabalho com o banco de dados. No começo, a sintaxe foi um pouco difícil, mas depois ficou mais tranquilo.

- **Requisições com Axios**: Aprender a fazer as requisições entre o frontend e o backend com o Axios foi bem útil. Isso me ajudou a entender melhor como os dados são trocados entre o cliente e o servidor.

---

## O que Aprendi

Aqui estão alguns dos principais aprendizados que tirei deste projeto:

- **React**: Melhorei meu entendimento sobre como funciona a renderização de componentes no React, como gerenciar estados de forma eficiente com hooks e como organizar melhor o código com componentes menores e reutilizáveis.
  
- **Node.js e Express**: Fiquei mais confortável com a criação de servidores e APIs. Aprendi como lidar com rotas, middleware e como retornar respostas JSON para o frontend.

- **Trabalhando com Banco de Dados**: O Prisma facilitou a interação com o MongoDB, proporcionando uma maneira simples de escrever queries e garantir que a integridade dos dados seja mantida. A ferramenta simplificou o processo de comunicação com o banco de dados, tornando o desenvolvimento mais ágil e organizado.

---

## Conclusão

Este projeto foi uma excelente oportunidade de aplicar e expandir meus conhecimentos em **React**, **Node.js**, **Express.js**, **MongoDB** e **Prisma**. Ao longo do desenvolvimento, aprendi muito sobre como as duas partes (frontend e backend) se comunicam e como gerenciar dados de forma eficiente.

Estou bastante satisfeita com o resultado e ansiosa para continuar evoluindo o projeto, adicionando novas funcionalidades e melhorias!
