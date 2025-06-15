const router = require('express').Router()
const {listarTarefas} = require('../controllers/tarefaController')
router.get('/hello-world', (_, res) => {
  res.json({ message: 'Hello World!' })
})
router.get('/tarefas', listarTarefas)
module.exports = router