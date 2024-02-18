'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usuarioId = 1; // Defina o ID do usuário ao qual as propriedades serão associadas

    await queryInterface.bulkInsert('Propriedades', [
      {
        id: 1, // Defina o ID da propriedade
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

    // Atualize a sequência de ID para o próximo valor disponível
    await queryInterface.sequelize.query("SELECT setval('\"Propriedades_id_seq\"', (SELECT MAX(id) FROM \"Propriedades\"))");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Propriedades', null, {});
  }
};
