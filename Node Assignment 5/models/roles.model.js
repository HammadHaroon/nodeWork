
const dbContext = require('../common/dbContext');
const Sequelize = require('sequelize');


const roles = dbContext.define(
  'roles',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    roleType: {
      type: Sequelize.STRING,
      field: 'roleType' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    details: {
      type: Sequelize.STRING,
      field: 'details'
    }

    },
  {
    freezeTableName: true // Model tableName will be the same as the model name
  }
);

module.exports = roles;