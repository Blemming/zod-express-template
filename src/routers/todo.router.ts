import { DependsOnMethod } from 'express-zod-api'
import { getAToDo, getAllToDos } from '../controllers/todo.controller'

export default {
  '': new DependsOnMethod({
    get: getAllToDos,
  }),
  ':id': new DependsOnMethod({
    get: getAToDo,
  }),
}
