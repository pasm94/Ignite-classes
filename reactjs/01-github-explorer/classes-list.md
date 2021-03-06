## CHAPTER I

#### Fundamentos do ReactJS

- Criando estrutura do projeto

  - yarn init -Y
  - yarn add react
  - yarn add react-dom

- Configurando Babel

  - yarn add @babel/core @babel/cli @babel/preset-env -D
  - yarn babel src/index.jsx --out-file dist/bundle.js
  - yarn add @babel/preset-react -D

  O Babel converte o código js moderno em código js que os navegadores entendem

- Configurando Webpack

  - yarn add webpack webpack-cli -D
  - yarn add babel-loader -D
  - yarn webpack

  Faz o mesmo que o Babel, porém para outros tipos de arquivos (.png, .jpg) dentro do código js

- Servindo HTML estático

  - yarn add html-webpack-plugin -D

- Webpack Dev Server

  - yarn add webpack-dev-server -D
  - yarn webpack serve

- Ambiente dev e produção

  - yarn add cross-env -D <i>`esse comando serve pra criar variáveis de ambiente, independente do OS`</i>

- Importando arquivos CSS

  - yarn add style-loader css-loader -D

- Utilizando SASS

  - yarn add sass-loader -D
  - yarn add node-sass -D

- Fast Refresh no Webpack

  - yarn add @pmmmwh/react-refresh-webpack-plugin react-refresh -D

- TypeScript no ReactJS

  - yarn add typescript -D
  - yarn tsc --init
  - yarn add @babel/preset-typescript -D
  - yarn add @types/react-dom -D
  