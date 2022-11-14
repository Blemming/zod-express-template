import type { Routing } from 'express-zod-api'
import toDoRouter from './routers/todo.router'

const routing: Routing = {
  v1: {
    todo: toDoRouter,
  },
}

export default routing
