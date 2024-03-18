## Aplicações
- Auxilio de pequenos produtores no combate de pragas e doenças (agricultura).

## Vantagens & Desvantagens

- fácil de utilização
- funções intuitivas

porém...

- é mais cômodo usar um grupo de facebook sobre o assunto ou outra plataforma

## Descrição geral

O projeto é um protótipo de uma ferramenta web de um sistema hipotético de combate a pragas

- backend feito em Node.js.
- Frontend em Vue.js
- Gerenciamento da database em MySQL
- ORM feito em sequelize
- Arquitetura MCV
- Versionamento feito pelo Github

## Requisitos funcionais

- [RF001] o sistema permite cadastro de cliente
- [RF002] o sistema permite login de cliente
- [RF003] o cliente tem acesso a um perfil onde ele pode ver as propriedades
- [RF004] o cliente pode cadastrar novas propriedades pelo sueu perfil
- [RF005] o cliente pode acessar uma página com dados das propriedades (temperatura, solo, culturas e etc.)
- [RF006] o cliente pode cadastrar novas culturas em cada propriedade
- [RF007] o cliente pode acessar uma página com dados das culturas 
- [RF008] o cliente pode acessar um problema envolvendo esta cultura
- [RF009] o cliente tem acesso a soluções propostas por técnicos.
- [RF010] o sistema permite login de técnico
- [RF011] o técnico tem acesso a um perfil onde ele pode ver os problemas que foram cadastrados 
- [RF012] o técnico pode sugerir uma solução ao problema do cliente.

 ## Database do projeto
 
 ![Database do projeto](https://github.com/Ary2941/My-project-1/assets/155399987/32a3902d-29d2-4be2-b663-37fdb82a1fcd)

## Dependências
- Node.js (com npm)
- yarn
- MySQL

## Frontend
Instalando dependências
```bash
npm install --global yarn
yarn
```

Iniciando aplicação
```bash
yarn serve
```
- endereço: http://localhost:8080/

## Backend
Criando database no localhost (MySQL command line)
```bash
CREATE DATABASE database_development;
```
Instalando dependências
```bash
yarn
```
para importar migrations e seeds na database
```bash
yarn db-fill
```
para retirar migrations e seeds na database
```bash
yarn db-purge
```
Iniciando aplicação (server)
```bash
yarn start
```
 - Local:   http://localhost:3000/ 