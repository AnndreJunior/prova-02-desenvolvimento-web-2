const router = require('express').Router()

router.get('/hello-world', (_, res) => {
  res.json({ message: 'Hello World!' })
})

module.exports = router
