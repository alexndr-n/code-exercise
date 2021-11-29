'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Transactions', 'userId', { transaction: t }),
        queryInterface.addColumn('Transactions', 'UserId', {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        }, { transaction: t }),
      ]);
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Transactions', 'UserId', { transaction: t }),
        queryInterface.addColumn('Transactions', 'userId', {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        }, { transaction: t }),
      ]);
    });  }
};