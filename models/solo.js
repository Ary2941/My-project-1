const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');

const Solo = sequelize.define('Solo', {
  pH_Solo: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  Nivel_Nitrogenio: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: true,
  },
  Nivel_Fosforo: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: true,
  },
  Nivel_Potassio: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: true,
  },

});

// Defina a relação entre Propriedade e Solo
Propriedade.hasOne(Solo);
Solo.belongsTo(Propriedade);

module.exports = Solo;
