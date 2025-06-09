const express = require('express')
const env = require('./config/env')
const router = require('./routes')

const app = express()

app.use(express.json())
app.use(router)

app.listen(Number.parseInt(env.PORT), () =>
  console.log(`Serve running on port ${env.PORT}`),
)
