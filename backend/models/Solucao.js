const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');
const Problema = require('./Problema'); // Altere o caminho conforme necessário
const Usuario = require('./Usuario'); // Altere o caminho conforme necessário

const Solução = sequelize.define('Solucoes', {
  diagnóstico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  acoes_recomendadas: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
  monitoramentos: {
    type: DataTypes.STRING,
  },
  observacoes: {
    type: DataTypes.STRING,
  },
});

// Defina a relação entre Solução e Problema
Problema.hasMany(Solução);
Solução.belongsTo(Problema);


// Defina a relação entre Solução e Usuario
Usuario.hasMany(Solução);
Solução.belongsTo(Usuario);

module.exports = Solução;
