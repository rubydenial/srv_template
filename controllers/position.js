const Position = require('../models/Position');

module.exports.getAll = function(request, response) {
  Position.findAll()
    .then(records => response.json(records))
    .catch(err => response.send(`Error: ${err}`))
};

module.exports.getByID = function(request, response) {
  Position.findOne({
    where: {
      id: request.params.id
    }
  })
    .then(record => {
      if (record) {
        response.json(record)
      } else {
        response.send(`Task with id=${request.params.id} does not exist`)
      }
    })
    .catch(err => response.send(`Error: ${err}`))
};

module.exports.create = function(request, response) {

};

module.exports.remove = function(request, response) {

};

module.exports.update = function(request, response) {

};