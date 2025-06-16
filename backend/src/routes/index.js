const router = require('express').Router()
const updateTodoController = require('../controllers/update-todo-controller')
const createTodoController = require('../controllers/create-todo-controller')
const { listarTarefas } = require('../controllers/tarefaController')

router.get('/hello-world', (_, res) => {
  res.json({ message: 'Hello World!' })
})

router.post('/tarefas', createTodoController)
router.get('/tarefas', listarTarefas)
router.patch('/tarefas/:id', updateTodoController)

module.exports = router
