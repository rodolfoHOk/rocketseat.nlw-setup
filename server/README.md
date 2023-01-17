# NLW Setup - Server

> NLW Setup Server Project: created during RocketSeat's NLW Setup event

## Guia de Setup do projeto:

- Iniciando projeto NodeJs: npm init -y

- Instalando o Fastify: npm install fastify

- Instalando o Typescript: npm install -D typescript

- Configurando o Typescript no projeto:

  - npx tsc --init
  - tsconfig.json: "target": "es2020"

- Instalando o tsx: npm install -D tsx

- Configurando o tsx no projeto: package.json:

        "scripts": {
          "dev": "tsx watch src/server.ts"
        },

- Rodando o projeto com Typescript: npm run dev

- Instalando o Prisma: npm install -D prisma

- Iniciando o Prisma no projeto: npx prisma init --datasource-provider SQLite

- Criando migrações com Prisma: npx prisma migrate dev

- Acessando o banco de dados pelo Prisma: npx prisma studio

- Instalando o CORS em um projeto com Fastify: npm install @fastify/cors
