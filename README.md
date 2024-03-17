
# Projeto Parte 3 - DSW


## Introdução

O controle de pragas na agricultura é fundamental para uma boa colheita, garantindo uma boa produtividade e a qualidade dos produtos agrícolas. Dessa forma, um bom planejamento e monitoramento dos plantios, a fim de identificar rapidamente qualquer tipo de praga que possa atingir a plantação, é essencial para evitar perdas no campo.
Se o produtor rural conseguisse de uma forma mais simples se aproveitar das evoluções tecnológicas desenvolvidas pela agricultura 4.0, teríamos um melhor combate das pragas agrícolas, um sistema inteligente capaz de elaborar estratégias e/ou sugerir ações de controle de pestes melhoraria este cenário de combate à pestes, e ainda poderia servir de transição do modelo atual de combate através de defensivos químicos para ações de controle biológico

## Descrição geral

O projeto é um protótipo de uma ferramenta web de um sistema hipotético de combate a pragas
Backend feito em Node.js. 
Frontend da aplicação será baseado no framework Vue.js
Gerenciamento do database em MySQL
Arquitetura MCV*
Versionamento feito pelo Github

## Requisitos funcionais

[RF001] o sistema deve permitir cadastro de usuário (cliente e técnico). *PARCIAL 

[RF011] o cliente ou técnico pode consultar os dados dele no sistema

[RF012] o técnico deve emitir um diagnóstico com base no caso atual do cliente *PENDENTE

[RF013] o técnico deve ter acesso a outros diagnósticos que o mesmo fez *PENDENTE

[RF021] o técnico pode adicionar sugestões de controle biológico e alternativas *PENDENTE

[RF022] o técnico ou cliente pode consultar os dados dele no sistema

[RF031] um diagnóstico pode ser fechado ou aberto, sendo fechados casos com soluções já estabelecidas e abertos casos que tem que ser respondidos por técnicos para serem concluídos.*PENDENTE

## Dependências
Node.js (com npm)
yarn
MySQL

## frontend
Instalando dependências
```bash
npm install --global yarn
yarn
```

Iniciando aplicação
```bash
yarn serve
```
endereço:   http://localhost:8080/


## backend
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



