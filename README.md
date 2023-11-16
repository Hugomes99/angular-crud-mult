# CRUD em Angular para Atividade de Multicamadas

Este é um projeto de CRUD em Angular desenvolvido para uma atividade de multicamadas. O tutorial a seguir fornecerá instruções para inicializar o projeto utilizando [Angular CLI](https://github.com/angular/angular-cli) version 15.1.0 e JsonServer.

## Requisitos

Certifique-se de ter o seguinte instalado antes de prosseguir:

- [Node.js](https://nodejs.org/) - Node.js e npm (Node Package Manager)
- [Angular CLI](https://angular.io/cli) - Ferramenta de Linha de Comando Angular
- [JsonServer](https://www.npmjs.com/package/json-server) - Simula um servidor RESTful com dados em formato JSON

## Instruções de Inicialização

1. Instalar Dependências do Projeto:

   ```
   npm install
   ```

2. Instalar o Angular CLI de forma global:

   ```
   npm install -g @angular/cli
   ```

3. Iniciar o JsonServer para Dados Falsos:

   ```
   npm install -g json-server
   ```

   ```
   json-server --watch db.json
   ```

4. Iniciar o Servidor de Desenvolvimento Angular:

   ```
   ng serve
   ```

5. Acessar o Aplicativo:

   Abra o navegador e vá para `http://localhost:4200/`. O aplicativo estará rodando localmente.

Certifique-se de ter o JsonServer em execução antes de iniciar o servidor Angular para garantir que os dados estejam disponíveis.

## Contribuições

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar pull requests. Se encontrar problemas ou tiver sugestões, abra uma issue.
