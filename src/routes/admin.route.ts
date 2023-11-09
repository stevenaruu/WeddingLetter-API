import { Router } from 'express'
import { refreshSession, createSession } from '../controllers/admin.controller'

export const AdminRouter: Router = Router()

AdminRouter.post('/login', createSession)
AdminRouter.post('/refresh', refreshSession)
