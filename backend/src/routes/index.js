const router = require('express').Router()
const updateTodoController = require('../controllers/update-todo-controller')

router.get('/hello-world', (_, res) => {
  res.json({ message: 'Hello World!' })
})

router.patch('/tarefas/:id', updateTodoController)

module.exports = router
