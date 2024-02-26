'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nome: 'John Doe',
        email: 'john.doe@example.com',
        senha: 'senha123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Jane Doe',
        email: 'jane.doe@example.com',
        senha: 'outrasenha456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Adicione mais registros conforme necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
