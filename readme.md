# Summary

Aplicação que realiza resumos de processos. Construída com React, TypeScript e Shadcn/ui.

## Índice

1. [Casos de Uso](#casos-de-uso)
2. [Arquitetura Base](#arquitetura-base)
3. [Como usar](#como-usar)
4. [Features Básicas](#features-básicas)
5. [Aspectos Técnicos](#aspectos-técnicos)
6. [Quadro de atividades Kanban](#quadro-de-atividades-kanban)
7. [Regras de Negócio](#regras-de-negócio)
8. [Testes da aplicação front-end](#testes-da-aplicação-front-end)

## Casos de Uso

* [Use Cases](?)
* [Source](?)

## Arquitetura Base

* [Arquitetura](?)
* [Source](?)

## Como usar

1. **Você precisa ter o [NodeJS](https://en.wikipedia.org/wiki/Node.js) instalado na sua máquina para fazer o setup da aplicação.**
   - Instale o Node.js na sua máquina no site oficial do [Node.js](https://nodejs.org/en).
   - No Windows/Linux/MacOS instale o pnpm:
     ```bash
     npm install pnpm -g
     ```
   - Clone a aplicação.
     ```bash
     git clone ?
     ```
   - Vá para o diretório do projeto:
     ```bash
     cd seed_frontend_react
     ```
   - Agora instale as depedências do projeto
     ```bash
     pnpm install
     ```

2. **Crie o arquivo `.env` na raiz do projeto:**
   - Crie um arquivo chamado `.env` no diretório raiz do seu projeto e adicione as variáveis necessárias, Exemplo:
     ```
     VITE_DATABASE_URL=""
     ```

3. **Execute a aplicação:**
   - No terminal da pasta raiz, no Windows/Linux/MacOS:
     ```bash
     pnpm dev
     ```
Observação:
- Antes de executar a aplicação front-end, procure deixar a [aplicação back-end](https://github.com/compexjr/seed_backend) executando para permitir os testes fim a fim (front-end->back-end, back-end->front-end).

## Features Básicas

1. F1. Login
2. F2. Logout
3. F3. Registro de novo usuário
4. F4. Recuperar senha
5. F5. Gerenciar Dashboard
6. F6. Gerenciar Profile do usuário

## Aspectos Técnicos

- Uso do React para criar componentes dinâmicos para criar aplicações HTML dinâmicas assíncronas.
- Uso do [TypeScript](https://en.wikipedia.org/wiki/TypeScript) para adicionar tipagem estática ao JavaScript, o que ajuda a prevenir erros comuns e torna o código mais robusto e confiável.
- Mais detalhes sobre a stack escolhida em [link](?)

## Quadro de atividades Kanban

Este projeto é dividido em diferentes tarefas conforme um fluxo de trabalho estruturado. Abaixo estão as tarefas salvas da equipe back-end com os passos para adicionar novos endpoints:

Quadro de Tarefas (Front-end) disponível em [link](https://github.com/orgs/compexjr/projects/7)

Quadro de Tarefas (Back-end) disponível em [link](https://github.com/orgs/compexjr/projects/6)

## Regras de Negócio

- **Autenticação:** Login e logout de usuários com geração e validação de tokens [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token).
- **Recuperação de Senha:** Processo seguro para redefinição de senha.
- **Perfil de Usuário:** Permite aos usuários editar suas informações pessoais e gerenciar suas fotos de perfil.
- **Dashboard:** Exibição de informações gerais sobre o sistema.
- **Token:** Sistema de geração e validação de tokens JWT para acesso seguro aos endpoints.

## Testes da aplicação front-end

TBD (To be defined)
