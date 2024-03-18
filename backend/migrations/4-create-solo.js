'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Solos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pH_Solo: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      Nivel_Nitrogenio: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      Nivel_Fosforo: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      Profundidade_Plantio: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      Nivel_Potassio: {
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
    await queryInterface.dropTable('Solos');
  }
};