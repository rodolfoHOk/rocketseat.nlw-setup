# π NLW Setup - Server π

> NLW Setup Server Project: created during RocketSeat's NLW Setup event

## π¨βπ» Main technologies π©βπ»

- Typescript
- Node Js
- Fastify
- Prisma
- SQLite

### π Additional libraries ποΈ

- @fastify/cors
- prisma-erd-generator and @mermaid-js/mermaid-cli
- zod
- dayjs

## π Setup Guide (Portuguese) π

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

- Criando migraΓ§Γ΅es com Prisma: npx prisma migrate dev

- Acessando o banco de dados pelo Prisma: npx prisma studio

- Instalando o CORS em um projeto com Fastify: npm install @fastify/cors

## π Projects repositories links β¨

- [Server project](server)

- [Web project](web)

- [Mobile project](mobile)
