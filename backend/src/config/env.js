const { z } = require('zod')

const envSchema = z.object({
  PORT: z.string(),
})

const env = envSchema.parse(process.env)

module.exports = env
