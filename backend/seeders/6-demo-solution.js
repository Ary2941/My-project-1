'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Encontre uma problema existente para associar às soluções
    const problemaId = await queryInterface.rawSelect('Problemas', {
      where: {}, // Você pode ajustar isso conforme necessário
    }, ['id']);

    if (!problemaId) {
      console.error('Nenhuma problema encontrada. Certifique-se de ter problemas no banco de dados antes de executar esta seed.');
      return;
    }

    // Encontre um usuário existente para associar às soluções
    const TecnicoId = await queryInterface.rawSelect('Tecnicos', {
      where: {}, // Você pode ajustar isso conforme necessário
    }, ['id']);

    if (!TecnicoId) {
      console.error('Nenhum técnico encontrado. Certifique-se de ter técnico no banco de dados antes de executar esta seed.');
      return;
    }

    await queryInterface.bulkInsert('Solucoes', [
      {
        diagnóstico: 'Controle de pragas bem-sucedido',
        acoes_recomendadas: 'Utilizar inseticida recomendado',
        monitoramentos: 'Realizar inspeção regular',
        observacoes: 'Nenhuma observação adicional',
        ProblemaId: problemaId,
        TecnicoId: TecnicoId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        diagnóstico: 'Tratamento eficaz de doenças nas plantas',
        acoes_recomendadas: 'Aplicar fungicida',
        monitoramentos: 'Verificar regularmente a saúde das plantas',
        observacoes: 'Acompanhar o progresso do tratamento',
        ProblemaId: problemaId,
        TecnicoId: TecnicoId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Adicione mais registros conforme necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Solucoes', null, {});
  }
};
