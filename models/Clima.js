const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');
const Clima = require('./Propriedade'); // Altere o caminho conforme necessário

const Clima = sequelize.define('Clima', {
  temperatura_Media: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  precipitacao_Anual: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  umidade_Relativa: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  horas_sol_diarias: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Defina a relação entre Usuario e Propriedade
Propriedade.hasOne(Clima);
Clima.belongsTo(Propriedade);


module.exports = Clima;