'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Encontre um usuário existente para associar às propriedades
    const propriedadeId = await queryInterface.rawSelect('Propriedades', {
      where: {}, // Você pode ajustar isso conforme necessário
    }, ['id']);

    if (!propriedadeId) {
      console.error('Nenhum usuário encontrado. Certifique-se de ter usuários no banco de dados antes de executar esta seed.');
      return;
    }

    await queryInterface.bulkInsert('Culturas', [
      {
        nome_Cultura: 'Tomate',
        ciclo_Crescimento: 60,
        espacamento_Entre_Plantas: 40.0,
        profundidade_Plantio: 10.0,
        propriedadeId: propriedadeId, // chave estrangeira
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome_Cultura: 'Alface',
        ciclo_Crescimento: 30,
        espacamento_Entre_Plantas: 20.0,
        profundidade_Plantio: 5.0,
        propriedadeId: propriedadeId,  // chave estrangeira
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





