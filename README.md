<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# AI Call Agent

This is a NestJS project that acts as an AI call agent. It uses OpenAI and Google Generative AI to process and respond to phone calls.

## Description

This project is a NestJS application that provides a backend for an AI-powered call agent. It is designed to be deployed to an Ubuntu server and is configured with a CI/CD pipeline using GitHub Actions.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

This project is configured with a CI/CD pipeline using GitHub Actions. The workflow is defined in `.github/workflows/push_ci.yml`.

On every push to the `main` branch, the following steps are executed:
1. The repository is checked out.
2. Node.js is set up.
3. Dependencies are installed using `npm install`.
4. Tests are run using `npm run test`.
5. The project is built using `npm run build`.
6. The `dist` folder is deployed to the server at `/var/www/aicallagent/` using `rsync`.

For the deployment to work, the following secrets need to be configured in the GitHub repository:
- `SSH_PRIVATE_KEY`: The private SSH key that has access to the server.
- `SSH_HOST`: The IP address of the server.
- `SSH_USER`: The username to log in to the server.

## Dependencies

### Main dependencies
- `@google/genai`
- `@nestjs/common`
- `@nestjs/core`
- `@nestjs/platform-express`
- `openai`
- `reflect-metadata`
- `rxjs`

### Development dependencies
- `@eslint/eslintrc`
- `@eslint/js`
- `@nestjs/cli`
- `@nestjs/schematics`
- `@nestjs/testing`
- `@types/express`
- `@types/jest`
- `@types/node`
- `@types/supertest`
- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `globals`
- `jest`
- `prettier`
- `source-map-support`
- `supertest`
- `ts-jest`
- `ts-loader`
- `ts-node`
- `tsconfig-paths`
- `typescript`
- `typescript-eslint`

## License

This project is UNLICENSED.
