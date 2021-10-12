'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notes', [
      {
        userId: 1,
        notebookId: 1,
        title: 'Loren: Viverra pharetra turpis',
        content: 'Viverra pharetra turpis cubilia erat. Sem dapibus.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 1,
        title: 'Curae convallis. Ante, sapien, euismod',
        content: 'Est quis a arcu velit tortor duis. Nibh eu lorem cum diam, nonummy. Ut lorem. Hac, sed pellentesque dictum id quis imperdiet felis, pede magnis et mi tempus.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        notebookId: 1,
        title: 'Id dictum non quisque nascetur risus.',
        content: 'Odio cursus nascetur purus ad libero aliquet magnis. Pharetra. Ligula primis fames egestas porta id mattis iaculis nam, aenean dolor integer dolor.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ]);
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Notes', null, {});
  }
};
