# Projeto Parte 3 - DSW


## Introdução

O controle de pragas na agricultura é fundamental para uma boa colheita, garantindo uma boa produtividade e a qualidade dos produtos agrícolas. Dessa forma, um bom planejamento e monitoramento dos plantios, a fim de identificar rapidamente qualquer tipo de praga que possa atingir a plantação, é essencial para evitar perdas no campo.
Se o produtor rural conseguisse de uma forma mais simples se aproveitar das evoluções tecnológicas desenvolvidas pela agricultura 4.0, teríamos um melhor combate das pragas agrícolas, um sistema inteligente capaz de elaborar estratégias e/ou sugerir ações de controle de pestes melhoraria este cenário de combate à pestes, e ainda poderia servir de transição do modelo atual de combate através de defensivos químicos para ações de controle biológico

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
massa nixo
