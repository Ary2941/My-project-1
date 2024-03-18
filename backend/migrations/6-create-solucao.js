'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solucoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      diagnóstico: {
        allowNull: false,
        type: Sequelize.STRING
      },
      acoes_recomendadas: {
        allowNull: false,
        type: Sequelize.STRING
      },
      monitoramentos: {
        type: Sequelize.STRING
      },
      observacoes: {
        type: Sequelize.STRING
      },

      ProblemaId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      TecnicoId: {
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
    await queryInterface.dropTable('Solucoes');
  }
};