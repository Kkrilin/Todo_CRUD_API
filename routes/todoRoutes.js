const todoControllers = require('../controllers/todoControllers.js');
const validate = require('../middleware/validateRequest.js');

const router = require('express').Router();

router.get('/todos', todoControllers.getAlltodos);
router.post('/todos', validate.validateRequest, todoControllers.createUsertodo);
router.get('/todos/:id', validate.validateParam, todoControllers.getOnetodo);
router.put(
  '/todos/:id',
  validate.validateRequest,
  validate.validateParam,
  todoControllers.updateOnetodo,
);
router.delete(
  '/todos/:id',
  validate.validateParam,
  todoControllers.deleteOnetodo,
);

module.exports = router;
