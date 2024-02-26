// app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelizeConfig');
const mainRoutes = require('./routes/mainRoutes');
const cors = require('cors');

const app = express();

// Configuração do middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// Configuração do diretório de visualizações
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configuração de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configuração das rotas
app.use('/', mainRoutes);

// Testar a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Sincronizar modelos com o banco de dados (criar tabelas)
sequelize.sync();

// Rota principal redireciona para a lista de usuários
app.get('/', (req, res) => {
  res.redirect('/usuarios');
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
