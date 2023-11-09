import { Router } from 'express'
import { createGuest, deleteGuest, getGuest, updateGuest } from '../controllers/guest.controller'
import { requireAdmin } from '../middleware/auth'

export const GuestRouter: Router = Router()

GuestRouter.get('/', getGuest)
GuestRouter.get('/:id', getGuest)
GuestRouter.post('/', requireAdmin, createGuest)
GuestRouter.put('/:id', requireAdmin, updateGuest)
GuestRouter.delete('/:id', requireAdmin, deleteGuest)
