# Drip Store Backend

Esse projeto se trata e um projeto para estudo.
A ideia aqui é abordar um projeto node utilizando as tecnologias: Express, Sequelize e Mysql.

## Como instalar o projeto
### Requisitos do projeto
- Node versão 18.17.1 ou superior
- Npm versão 10.1.0 ou superior
- Mysql versão 8.1 ou superior

### Configure o arquivo de ambiente
```
cp .env.example .env
```
Após executar o comando acima preencha as informações o arquivo `.env` com suas informações.

### Instale as dependencias
```
npm i
```

### Criar banco de dados
```
npm run db:create
```

### Rodar as Migrate
```
npm run db:migrate
```

### Inicie o servidor
```
npm start
```
