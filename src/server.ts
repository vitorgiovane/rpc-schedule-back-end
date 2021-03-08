import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

import routes from './routes'
import AppError from './errors/AppError'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      })
    }

    console.log(error)

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error.'
    })
  }
)

const port = process.env.port || 3333

app.listen(port, () => {
  console.log('🚀️ the server has started...')
})
