import { Request, Response } from 'express'
import { logger } from '../utils/logger'

export const getHealth = (req: Request, res: Response) => {
    logger.info('Health check success')
    return res.status(200).send({ status: '200', message: 'OK' })
}
