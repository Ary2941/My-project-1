// propriedade.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');
const Usuario = require('./Usuario'); // Altere o caminho conforme necessário

const Propriedade = sequelize.define('Propriedade', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Outras propriedades da propriedade
});

// Defina a relação entre Usuario e Propriedade
Usuario.hasMany(Propriedade);
Propriedade.belongsTo(Usuario);

// Sincronize o modelo com o banco de dados (criar a tabela)
Propriedade.sync();

module.exports = Propriedade;
