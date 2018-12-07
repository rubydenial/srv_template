const express = require('express');
const passport = require('passport');
const controller = require('../controllers/position');
const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), controller.findAll);
router.get('/:id', controller.findOne);
router.delete('/:id', controller.destroy);
router.post('/', controller.create);
router.patch('/:id', controller.update);

module.exports = router;