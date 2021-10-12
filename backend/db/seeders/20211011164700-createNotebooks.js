'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notebooks', [
        {
          userId: 1,
          title: 'Loren',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: 'Ipsum',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          title: 'Dolor',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
