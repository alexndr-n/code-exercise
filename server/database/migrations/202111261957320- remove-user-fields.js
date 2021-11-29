'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'first_name', { transaction: t }),
        queryInterface.removeColumn('Users', 'last_name', { transaction: t }),

      ]);
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('User', 'first_name', {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        }, { transaction: t }),
        queryInterface.addColumn('User', 'last_name', {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        }, { transaction: t }),
      ]);
    });  }
};