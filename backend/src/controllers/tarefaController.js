const db = require('../config/db')

const listarTarefas = (req, res) => {
  const query = 'SELECT * FROM todos'

  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar tarefas:', err)
      return res.status(500).json({ erro: 'Erro ao buscar tarefas' })
    }

    res.json(results)
  })
}

module.exports = {
  listarTarefas
}