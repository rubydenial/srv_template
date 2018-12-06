const Sequelize = require('sequelize');
const db = require('../db/dbex');

const docSchema = db.sequelize.define(
  'Document',
  {
    dcID: {
      type: Sequelize.INTEGER
    },
    dcType: {
      type: Sequelize.STRING(10)
    },
    dcNo: {
      type: db.Sequelize.STRING(35)
    }
  },
  {
    timestamps: false
  }
);

module.exports = docSchema;
