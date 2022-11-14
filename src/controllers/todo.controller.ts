import { defaultEndpointsFactory, z } from 'express-zod-api'
const toDos = [
  { id: 1, title: 'Todo 1' },
  { id: 2, title: 'Todo 2' },
]
const ToDoModel = z.object({
  id: z.number(),
  title: z.string(),
})

const getAToDo = defaultEndpointsFactory.build({
  method: 'get',
  input: z.object({
    // for empty input use z.object({})
    id: z.string(),
  }),
  output: ToDoModel,
  handler: async ({ input: { id }, options, logger }) => {
    logger.debug('Options:', options) // middlewares provide options
    return toDos[id]
  },
})

const getAllToDos = defaultEndpointsFactory.build({
  method: 'get',
  input: z.object({}),
  output: z.array(ToDoModel),
  handler: async ({ input: _input, options, logger }) => {
    logger.debug('Options:', options) // middlewares provide options
    return { toDos }
  },
})

export {
  getAToDo,
  getAllToDos,
}
