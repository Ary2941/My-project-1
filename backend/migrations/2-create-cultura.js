'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('culturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_Cultura: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ciclo_Crescimento: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      espacamento_Entre_Plantas: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      profundidade_Plantio: {
        allowNull: false,
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('culturas');
  }
};