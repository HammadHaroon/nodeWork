
const dbContext = require('../common/dbContext');
const Sequelize = require('sequelize');


const permissions = dbContext.define(
  'permissions',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id' // Will result in an attribute that is firstName when user facing but first_name in the database
      
    },
    permissionType: {
      type: Sequelize.STRING,
      field: 'permissionType' // Will result in an attribute that is firstName when user facing but first_name in the database
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

module.exports = permissions;