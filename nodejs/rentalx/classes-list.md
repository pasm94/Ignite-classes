## CHAPTER II

#### Primeiro projeto com Node.js

- Configurando ts-node-dev
  - mkdir rentalx
  - yarn init -y
  - yarn add express
  - yarn add @types/express -D
  - yarn add typescript -D
  - yarn tsc --init

  - Instalações eslint e prettier https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779#eaf6e8bdcabc4d809cdae302e29750da
  - yarn add eslint -D
  - yarn eslint --init
  - yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 @typescript-eslint/parser@latest
  - yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript
  - yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

  - yarn add ts-node-dev -D

- Inserindo ID com uuid
  - yarn add uuid
  - yarn add @types/uuid -D

- Criando upload de arquivos
  - yarn add multer
  - yarn add @types/multer -D

- Conhecendo o conceito de stream
  - yarn add csv-parse