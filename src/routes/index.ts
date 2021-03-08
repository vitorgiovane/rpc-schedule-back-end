import { Router } from 'express'
import programmesRouter from './programmes'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ message: "OK" })
})

routes.use('/programmes', programmesRouter)

export default routes
