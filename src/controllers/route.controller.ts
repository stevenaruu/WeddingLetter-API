import { Request, Response } from 'express'
import { logger } from '../utils/logger'

export const getRoute = (req: Request, res: Response) => {
    logger.info('Route check success')
    const textResponse = 'WEDDING LETTER V1.0'
    res.setHeader('Content-Type', 'text/plain')
    return res.status(200).send(textResponse)
}
