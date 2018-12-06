const express = require('express');
const controller = require('../controllers/doc');
const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.delete('/:id', controller.destroy);
router.post('/', controller.create);
router.patch('/:id', controller.update);

module.exports = router;