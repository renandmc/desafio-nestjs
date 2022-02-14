# Desafio NestJS - Imersão FullCycle

Desafio realizado para o evento Imersão FullCycle realizado de 07/02 até 14/02 de 2022

## Informações do desafio
Nesse desafio você deverá criar uma aplicação Nest.js que possua 2 endpoints REST: um para a criação de uma transação e outro para a listagem de transações. O padrão da url deverá ser: /transactions. O mecanismo de persistência será o banco de dados SQLite3 e a aplicação deverá ser executada na porta 3000.

Crie uma imagem Docker, faça o push para o DockerHub e informe seu caminho no campo abaixo.

Os campos da tabela de transactions serão: id, account_id, amount, created_at, updated_at.

## Instruções para executar programa

### Sem Docker

```bash
$ npm install
$ npm run start:dev
```

### Com Docker

```bash
$ docker build -t desafio .
$ docker run -dp 3000:3000 desafio
```