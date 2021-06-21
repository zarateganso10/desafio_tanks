## Descrição

Uma api node criada com nestjs, typescript, graphql e utilizando o banco de dados sqlite

rota da api: http://localhost:3000/graphql

## Requisitos

ter o node instalado na maquina ou o docker

## Rodando o app com node

```bash
# Instalar as dependencias
$ npm install

# Criar a build
$ npm run build

# Criar o banco de dados
$ npx typeorm migration:run

# Rodar o app
$ npm run start
```

## Rodando o app com docker
```bash
# Subir o container
$ docker-compose up
```