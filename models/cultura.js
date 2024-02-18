const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');
const Propriedade = require('./Propriedade'); // Altere o caminho conforme necessário

const Cultura = sequelize.define('Cultura', {
  nome_Cultura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciclo_Crescimento: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  espacamento_Entre_Plantas: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  profundidade_Plantio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Defina a relação entre Usuario e Propriedade
Propriedade.hasMany(Cultura);
Cultura.belongsTo(Propriedade);


module.exports = Cultura;
