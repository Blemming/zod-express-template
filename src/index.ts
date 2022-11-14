import { createConfig, createServer } from 'express-zod-api'
import routing from './routing'

const config = createConfig({
  server: {
    listen: 8090, // port or socket
  },
  cors: true,
  logger: {
    level: 'debug',
    color: true,
  },
})

createServer(config, routing)
