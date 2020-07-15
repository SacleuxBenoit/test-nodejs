const todosController = require('../controllers').todos;

module.exports = (router) => {
  router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  router.post('/api/todos', todosController.create);
};