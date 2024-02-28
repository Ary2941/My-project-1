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

    await queryInterface.bulkInsert('Solos', [
        {
          pH_Solo: 6.5,
          Nivel_Nitrogenio: 50.0,
          Nivel_Fosforo: 25.0,
          Profundidade_Plantio:30,
          Nivel_Potassio: 40.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          PropriedadeId: propriedadeId+1, // chave estrangeira
        },
        {
          pH_Solo: 7,
          Nivel_Nitrogenio: 5.0,
          Nivel_Fosforo: 5.0,
          Profundidade_Plantio: 10,
          Nivel_Potassio: 3.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          PropriedadeId: propriedadeId, // chave estrangeira
        },
        // Adicione mais registros conforme necessário
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Solos', null, {});
  }
};

