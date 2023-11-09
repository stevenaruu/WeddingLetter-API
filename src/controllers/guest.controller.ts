import { Request, Response } from 'express'
import { createGuestValidation, updateGuestValidation } from '../validations/guest.validation'
import { logger } from '../utils/logger'
import {
    addGuestToDB,
    deleteGuestById,
    getGuestById,
    getGuestFromDB,
    updateGuestById
} from '../services/guest.service'
import { v4 as uuidv4 } from 'uuid'

export const createGuest = async (req: Request, res: Response) => {
    req.body.guest_id = uuidv4()
    req.body.is_comment = false
    const { error, value } = createGuestValidation(req.body)
    if (error) {
        logger.error(`ERR: guest - create = ${error.details[0].message}`)
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
    }

    try {
        await addGuestToDB(value)

        logger.info('Success add new guest')
        return res.status(201).send({ status: true, statusCode: 201, message: 'Add guest success', data: value })
    } catch (err: any) {
        logger.error(`ERR: guest - create = ${err}`)
        return res.status(422).send({ status: false, statusCode: 422, message: err.message })
    }
}

export const getGuest = async (req: Request, res: Response) => {
    const {
        params: { id }
    } = req

    if (id) {
        const guest = await getGuestById(id)
        if (guest) {
            logger.info('Success get guest data')
            return res.status(200).send({ status: true, statusCode: 200, data: guest })
        } else {
            logger.info('Guest data not found')
            return res.status(404).send({ status: true, statusCode: 404, message: 'Guest not found', data: {} })
        }
    } else {
        const guests: any = await getGuestFromDB()
        logger.info('Success get guest data')
        return res.status(200).send({ status: true, statusCode: 200, data: guests })
    }
}

export const updateGuest = async (req: Request, res: Response) => {
    const {
        params: { id }
    } = req
    req.body.is_comment = true
    const { error, value } = updateGuestValidation(req.body)
    if (error) {
        logger.error(`ERR: guest - update = ${error.details[0].message}`)
        return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
    }

    try {
        const result = await updateGuestById(id, value)
        if (result) {
            logger.info('Success update guest data')
            return res.status(200).send({ status: true, statusCode: 200, message: 'Update guest success' })
        } else {
            logger.info('Guest data not found')
            return res.status(404).send({ status: true, statusCode: 404, message: 'Guest not found' })
        }
    } catch (err: any) {
        logger.error(`ERR: guest - update = ${err}`)
        return res.status(422).send({ status: false, statusCode: 422, message: err.message })
    }
}

export const deleteGuest = async (req: Request, res: Response) => {
    const {
        params: { id }
    } = req

    try {
        const result = await deleteGuestById(id)
        if (result) {
            logger.info('Success delete guest data')
            return res.status(200).send({ status: true, statusCode: 200, message: 'Delete guest success' })
        } else {
            logger.info('Guest data not found')
            return res.status(404).send({ status: true, statusCode: 404, message: 'Guest not found' })
        }
    } catch (err: any) {
        logger.error(`ERR: guest - delete = ${err}`)
        return res.status(422).send({ status: false, statusCode: 422, message: err.message })
    }
}
