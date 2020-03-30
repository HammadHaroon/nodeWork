
const dbContext = require('../common/dbContext');
const Sequelize = require('sequelize');


const roles = require('./roles.model')


var users = dbContext.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    name: {
      type: Sequelize.STRING,
      field: 'name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    email: {
      type: Sequelize.STRING,
      field: 'email'
    },
    password: {
      type: Sequelize.STRING,
      field: 'password'
    }
    
  },

  {
    freezeTableName: true // Model tableName will be the same as the model name
  }



);




module.exports = users;