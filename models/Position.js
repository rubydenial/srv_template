const Sequelize = require('sequelize');
const db = require('../db/db');

const positionSchema = db.sequelize.define(
  'tasks',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(50)
    },
    count: {
      type: Sequelize.INTEGER
    },
    comment: {
      type: db.Sequelize.STRING(50)
    }
  },
  {
    timestamps: false
  }
);

module.exports = positionSchema;