const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');
const Propriedade = require('./Propriedade'); // Altere o caminho conforme necessário
const Cultura = require('./Cultura'); // Altere o caminho conforme necessário

const Problema = sequelize.define('Problema', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  observacoes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Defina a relação entre Problema e Propriedade
Propriedade.hasMany(Problema);
Problema.belongsTo(Propriedade);


// Defina a relação entre Problema e Propriedade
Cultura.hasMany(Problema);
Problema.belongsTo(Cultura);

module.exports = Problema;
