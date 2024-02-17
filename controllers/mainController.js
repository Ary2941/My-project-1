// mainController.js
const mainController = {
    index: (req, res) => {
      res.render('index'); // Renderiza a visualização index.ejs
    },
  
    outraPagina: (req, res) => {
      res.render('outraPagina'); // Renderiza a visualização outraPagina.ejs
    },
  
    visualizarUsuario: (req, res) => {
      const userId = req.params.id;
      res.send(`Visualizando usuário com ID ${userId}`);
    },
  
    processarFormulario: (req, res) => {
      const formData = req.body;
      // Lógica para processar o formulário
      res.send('Formulário recebido com sucesso!');
    },
  };
  
  module.exports = mainController;
  