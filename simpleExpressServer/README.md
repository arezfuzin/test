# Movies Service
This service is an connector to 3rd party endpoint that provide movies information

## Installation
1. copy `.env.example` to `.env`

```bash
$ cp .env.dist .env
```

2. install all dependencies

```bash
$ npm install
```

## Prepare Database Local
1. create migration file

```bash
$ npm run create:migrate-file <migration_file_name>
```

2. migrate database

```bash
$ DATABASE_URL=<database_local_url> npm run migrate up
```

# Run Apps Localy (Need to Prepare database local first)

```bash
$    npm start
```

# Run Test (Need to Prepare database local first)

```bash
$    npm run test
```