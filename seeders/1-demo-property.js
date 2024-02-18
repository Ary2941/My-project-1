'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Encontre um usuário existente para associar às propriedades
    const usuarioId = await queryInterface.rawSelect('Usuarios', {
      where: {}, // Você pode ajustar isso conforme necessário
    }, ['id']);

    if (!usuarioId) {
      console.error('Nenhum usuário encontrado. Certifique-se de ter usuários no banco de dados antes de executar esta seed.');
      return;
    }

    await queryInterface.bulkInsert('Propriedades', [
      {
        nome: 'Propriedade 1',
        UsuarioId: usuarioId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Propriedade 2',
        UsuarioId: usuarioId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Adicione mais registros conforme necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Propriedades', null, {});
  }
};
