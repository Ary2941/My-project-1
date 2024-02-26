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
        Localizacao_GPS: '123.456,789.012', // Substitua com um valor válido
        Tamanho_Area: 100.5, // Substitua com um valor válido
        Tipo_Solo: 'Argiloso', // Substitua com um valor válido
        Altitude: 500, // Substitua com um valor válido
        UsuarioId: usuarioId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Propriedade 2',
        Localizacao_GPS: '987.654,321.012', // Substitua com um valor válido
        Tamanho_Area: 150.3, // Substitua com um valor válido
        Tipo_Solo: 'Arenoso', // Substitua com um valor válido
        Altitude: 700, // Substitua com um valor válido
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
