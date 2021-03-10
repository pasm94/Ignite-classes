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
