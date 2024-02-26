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

    await queryInterface.bulkInsert('Climas', [
        {
          temperatura_Media: 25.5,
          precipitacao_Anual: 1200,
          umidade_Relativa: 70,
          horas_sol_diarias: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
          propriedadeId: propriedadeId, // chave estrangeira
        },
        // Adicione mais registros conforme necessário
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Climas', null, {});
  }
};

