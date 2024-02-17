const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');

const Usuario = sequelize.define('Usuario', {
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

// Sincronizar o modelo com o banco de dados (criar a tabela)
Usuario.sync();

module.exports = Usuario;
