import { Router } from 'express'
import { getHealth } from '../controllers/health.controller'

export const HealthRouter: Router = Router()

HealthRouter.get('/', getHealth)
