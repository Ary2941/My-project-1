// app.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configurar o middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src')));

// Configurar uma rota básica
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
