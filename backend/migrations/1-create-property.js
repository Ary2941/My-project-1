'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('propriedades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Localizacao_GPS: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Tamanho_Area: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      Tipo_Solo: {
        allowNull: false,
        type: Sequelize.STRING
      },

      Altitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },

      UsuarioId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('propriedades');
  }
};