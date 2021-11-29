'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'firstName', { transaction: t }),
        queryInterface.removeColumn('Users', 'lastName', { transaction: t }),

      ]);
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('User', 'firstName', {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        }, { transaction: t }),
        queryInterface.addColumn('User', 'lastName', {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        }, { transaction: t }),
      ]);
    });  }
};