## CHAPTER III

#### Fundamentos do Next.JS

- Criando estrutura Next.js

  - yarn create next-app ignews

- Adicionando TypeScript

  - yarn add typescript @types/react @types/node -D

- Estilização com SASS

  - yarn add sass

- Componente: SignInButton

  - yarn add react-icons

- Consumindo API do Stripe (SSR)

  - yarn add stripe

#### Back-end no front-end

- Autenticação com Next Auth

  - yarn add next-auth
  - yarn add @types/next-auth -D

- Configurando FaunaDb

  - yarn add faunadb

- Redirecionando para o Stripe

  - yarn add axios
  - yarn add @stripe/stripe-js

- Ouvindo webhooks

  - .\stripe login
  - .\stripe listen --forward-to localhost:3000/api/webhooks

  #### Front-end JAMStack

- Consumindo API do Prismic

  - yarn add @prismicio/client

- Listando posts em tela

  - yarn add prismic-dom
  - yarn add @types/prismic-dom

- Validando assinatura ativa

  - yarn add @types/next-auth@3.7.1 -D

## CHAPTER V

#### Testes unitários no React

- Configurando Testing Library

  - yarn add jest jest-dom @testing-library/jest-dom @testing-library/dom @testing-library/react babel-jest -D

- Testando primeiro componente

  - yarn test (pra mim funcionou yarn jest na verdade, mas criei o script test)

- Testando Header

  - yarn add identity-obj-proxy -D

- Testando SignInButton

  - yarn add ts-jest -D

- Coverage report

  - yarn test --coverage