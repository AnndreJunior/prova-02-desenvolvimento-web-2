const db = require('../config/db')

function updateTodoController(req, res) {
  const id = req.params.id
  db.query('SELECT * FROM todos WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }
    if (result.length == 0) {
      return res
        .status(404)
        .send({ error: `Tarefa com id ${id} não encontrada` })
    }

    const status = result[0].status === 0 ? 1 : 0
    db.query(
      'UPDATE todos SET status = ? WHERE id = ?',
      [status, id],
      (err) => {
        if (err) {
          return res.status(500).json({ error: err.message })
        }
        res.send()
      },
    )
  })
}

module.exports = updateTodoController
