const db = require('../config/db')

function createTodoController(req, res) {
  const { descricao } = req.body

  if (!descricao) {
    return res.status(400).json({ error: 'Descrição é obrigatória' })
  }

  const sql = 'INSERT INTO todos (descricao) VALUES (?)'

  db.query(sql, [descricao], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message })
    }

    res.status(201).json({
      id: result.insertId,
      descricao: descricao,
      status: 0,
      data_criacao: new Date()
    })
  })
}

module.exports = createTodoController
