'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('climas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      temperatura_Media: {
        type: Sequelize.FLOAT
      },
      precipitacao_Anual: {
        type: Sequelize.FLOAT
      },
      umidade_Relativa: {
        type: Sequelize.FLOAT
      },
      horas_sol_diarias: {
        type: Sequelize.INTEGER
      },
      PropriedadeId: {
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
    await queryInterface.dropTable('climas');
  }
};