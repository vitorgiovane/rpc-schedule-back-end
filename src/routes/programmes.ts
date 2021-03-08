import { Router } from 'express'

import AppError from '../errors/AppError'
import api from '../services/api'

const programmesRouter = Router()

programmesRouter.get('/', async (request, response) => {
  const { date } = request.query
  const rpcStationId = 1337

  let requestUrl = `${rpcStationId}`
  if (date) {
    requestUrl += `?date=${date}`
  }

  try {
    const programs = await api.get(requestUrl)

    return response.json(programs.data.programme.entries)
  } catch (error) {
    console.log(error)
    throw new AppError('The request to RPC API has failed!')
  }
})

export default programmesRouter
