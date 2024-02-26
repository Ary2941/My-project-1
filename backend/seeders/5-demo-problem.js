'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Encontre um usuário existente para associar às propriedades
    const propriedadeId = await queryInterface.rawSelect('Propriedades', {
      where: {}, // Você pode ajustar isso conforme necessário
    }, ['id']);

    const culturaId = await queryInterface.rawSelect('Culturas', {
        where: {}, // Você pode ajustar isso conforme necessário
    }, ['id']);
  

    if (!propriedadeId) {
      console.error('Nenhuma propriedade encontrada. Certifique-se de ter propriedades no banco de dados antes de executar esta seed.');
      return;
    }

    if (!culturaId) {
        console.error('Nenhuma cultura encontrada. Certifique-se de ter culturas no banco de dados antes de executar esta seed.');
        return;
      }

    await queryInterface.bulkInsert('Problemas', [
        {
          descricao: 'Praga de insetos',
          observacoes: 'Necessidade de controle de pragas',
          PropriedadeId: propriedadeId,
          CulturaId: culturaId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao: 'Doença nas plantas',
          observacoes: 'Identificar e tratar doenças nas plantas',
          PropriedadeId: propriedadeId,
          CulturaId: culturaId,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Adicione mais registros conforme necessário
      ], {});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Problemas', null, {});
    }
};

