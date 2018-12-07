const Sequelize = require('sequelize');
const db = require('../db/db');

const docSchema = db.sequelize.define(
  'Login',
  {
    login: {
      type: Sequelize.STRING(50)
    },
    psw: {
      type: db.Sequelize.STRING(255)
    }
  }
);

module.exports = docSchema;
