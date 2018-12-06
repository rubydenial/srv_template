const db = require('../db/dbex');
const Doc = require('../models/Doc');

module.exports.findAll = function (request, response) {
  //db.sequelize.query('select top(2) dcID, dcType, dcNo, dcDate from Document', {model: Doc})
//  db.sequelize.query(`exec dc_FindDocs 2,'ПП',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL`, { type: db.sequelize.QueryTypes.SELECT})
  db.sequelize.query(`exec dc_FindDocs 5,'ПП',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL`, {model: Doc})
    .then(records => {
      // let r = records.map((rec => {
      //   console.log(rec.dataValues);
      //   return rec.dataValues;
      // }));
       //response.send(r);
      response.json(records);
    })
    .catch(err => response.send(`Error: ${err}`))

  // Doc.findAll()
  //   .then(records => response.json(records))
  //   .catch(err => response.send(`Error: ${err}`))
};

module.exports.findOne = function (request, response) {
  Doc.findOne({
    where: {id: request.params.id}
  }).then(record => {
    if (record) {
      response.json(record)
    } else {
      response.send(`Task with id=${request.params.id} does not exist`)
    }
  }).catch(err => response.send(`Error: ${err}`))
};

module.exports.create = function (request, response) {
  if (request.body.name) {
    Doc.create(request.body)
      .then(data => response.json(data))
      .catch(err => response.send(`Error: ${err}`))
  } else {
    response.status(400).json({error: 'Bad Data'});
  }
};

module.exports.destroy = function (request, response) {
  Doc.destroy({
    where: {id: request.params.id}
  }).then(() => response.json({task: `Task id = ${request.params.id} Deleted !`}))
    .catch(err => response.send(`Error: ${err}`))
};

module.exports.update = function (request, response) {
  if (request.body.name) {
    Doc.update(request.body, {
      where: {id: request.params.id}
    }).then(() => response.json({task: `Task id = ${request.params.id} Updated !`}))
      .catch(err => response.send(`Error: ${err}`))
  } else {
    response.status(400).json({error: 'Bad Data'});
  }
};