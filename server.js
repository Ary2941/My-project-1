const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Configuração do middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração das rotas
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

// Configuração do diretório de visualizações
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configuração de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
