import { Router } from 'express'
import programmesRouter from './programmes'

const routes = Router()

routes.use('/programmes', programmesRouter)

export default routes
