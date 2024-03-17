<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Projeto Parte 3 - DSW</title>
</head>
<body>

<h1>Projeto Parte 3 - DSW</h1>

<h2>Introdução</h2>

<p>O controle de pragas na agricultura é fundamental para uma boa colheita, garantindo uma boa produtividade e a qualidade dos produtos agrícolas. Dessa forma, um bom planejamento e monitoramento dos plantios, a fim de identificar rapidamente qualquer tipo de praga que possa atingir a plantação, é essencial para evitar perdas no campo. Se o produtor rural conseguisse de uma forma mais simples se aproveitar das evoluções tecnológicas desenvolvidas pela agricultura 4.0, teríamos um melhor combate das pragas agrícolas, um sistema inteligente capaz de elaborar estratégias e/ou sugerir ações de controle de pestes melhoraria este cenário de combate à pestes, e ainda poderia servir de transição do modelo atual de combate através de defensivos químicos para ações de controle biológico.</p>

<h2>Descrição geral</h2>

<p>O projeto é um protótipo de uma ferramenta web de um sistema hipotético de combate a pragas Backend feito em Node.js. Frontend da aplicação será baseado no framework Vue.js Gerenciamento do database em MySQL Arquitetura MCV* Versionamento feito pelo Github</p>

<h2>Requisitos funcionais</h2>

<ul>
<li>[RF001] o sistema deve permitir cadastro de usuário (cliente e técnico). *PARCIAL</li>
<li>[RF011] o cliente ou técnico pode consultar os dados dele no sistema</li>
<li>[RF012] o técnico deve emitir um diagnóstico com base no caso atual do cliente *PENDENTE</li>
<li>[RF013] o técnico deve ter acesso a outros diagnósticos que o mesmo fez *PENDENTE</li>
<li>[RF021] o técnico pode adicionar sugestões de controle biológico e alternativas *PENDENTE</li>
<li>[RF022] o técnico ou cliente pode consultar os dados dele no sistema</li>
<li>[RF031] um diagnóstico pode ser fechado ou aberto, sendo fechados casos com soluções já estabelecidas e abertos casos que tem que ser respondidos por técnicos para serem concluídos.*PENDENTE</li>
</ul>

<h2>Dependências</h2>

<ul>
<li>Node.js (com npm)</li>
<li>yarn</li>
<li>MySQL</li>
</ul>

<h2>frontend</h2>

<p>Instalando dependências</p>
<pre><code>npm install --global yarn
yarn
</code></pre>

<p>Iniciando aplicação</p>
<pre><code>yarn serve
</code></pre>

<p>endereço: <a href="http://localhost:8080/">http://localhost:8080/</a></p>

<h2>backend</h2>

<p>Criando database no localhost (MySQL command line)</p>
<pre><code>CREATE DATABASE database_development;
</code></pre>

<p>Instalando dependências</p>
<pre><code>yarn
</code></pre>

<p>para importar migrations e seeds na database</p>
<pre><code>yarn db-fill
</code></pre>

<p>para retirar migrations e seeds na database</p>
<pre><code>yarn db-purge
</code></pre>

<p>Iniciando aplicação (server)</p>
<pre><code>yarn start
</code></pre>

<p>Local: <a href="http://localhost:3000/">http://localhost:3000/</a></p>

</body>
</html>
