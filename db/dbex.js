const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('datagroup', 'denysiukalek', 'superPSW66', {
  host: '10.199.1.6',
  dialect: 'mssql',
  dialectOptions: {
    instanceName: 'snickers',
    encrypt: false
  },
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;