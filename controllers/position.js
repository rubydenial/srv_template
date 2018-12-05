const Position = require('../models/Position');

module.exports.findAll = function (request, response) {
  Position.findAll()
    .then(records => response.json(records))
    .catch(err => response.send(`Error: ${err}`))
};

module.exports.findOne = function (request, response) {
  Position.findOne({
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
    Position.create(request.body)
      .then(data => response.json(data))
      .catch(err => response.send(`Error: ${err}`))
  } else {
    response.status(400).json({error: 'Bad Data'});
  }
};

module.exports.destroy = function (request, response) {
  Position.destroy({
    where: {id: request.params.id}
  }).then(() => response.json({task: `Task id = ${request.params.id} Deleted !`}))
    .catch(err => response.send(`Error: ${err}`))
};

module.exports.update = function (request, response) {
  if (request.body.name) {
    Position.update(request.body, {
      where: {id: request.params.id}
    }).then(() => response.json({task: `Task id = ${request.params.id} Updated !`}))
      .catch(err => response.send(`Error: ${err}`))
  } else {
    response.status(400).json({error: 'Bad Data'});
  }
};