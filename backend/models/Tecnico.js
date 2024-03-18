const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');

const Tecnico = sequelize.define('Tecnico', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Tecnico;
