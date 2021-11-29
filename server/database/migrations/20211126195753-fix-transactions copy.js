'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Transactions', 'type', { transaction: t }),
        queryInterface.addColumn('Transactions', 'createdAt', {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        }, { transaction: t }),
        queryInterface.addColumn('Transactions', 'updatedAt', {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        }, { transaction: t }),
      ]);
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Transactions', 'createdAt', { transaction: t }),
        queryInterface.removeColumn('Transactions', 'updatedAt', { transaction: t }),
        queryInterface.addColumn('Transactions', 'type', {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        }, { transaction: t }),
      ]);
    });  }
};