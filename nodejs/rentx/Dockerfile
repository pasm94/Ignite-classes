# imagem que queremos usar
FROM node 

# diretorio que queremos criar
WORKDIR /usr/app

# copiar esse arquivo para o diretorio acima (file path atual | ./onde vai)
COPY package.json ./

# usamos npm pois facilita, ja que ele vem com a imagem do node
RUN npm install

# copiar tudo para a nossa pasta raiz
COPY . .

# porta onde estamos usando o container
EXPOSE 3333

CMD ["npm", "run", "dev"]