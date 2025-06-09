const { z } = require('zod')

const envSchema = z.object({
  PORT: z.string(),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_NAME: z.string(),
})

const env = envSchema.parse(process.env)

module.exports = env
