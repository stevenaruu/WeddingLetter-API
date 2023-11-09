import { logger } from '../utils/logger'
import IGuest from '../types/guest.type'
import guestModel from '../models/guest.model'

export const addGuestToDB = async (payload: IGuest) => {
    return await guestModel.create(payload)
}

export const getGuestFromDB = async () => {
    return await guestModel
        .find()
        .then((data) => {
            return data
        })
        .catch((err) => {
            logger.info('Cannot get data from database')
            logger.error(err)
        })
}

export const getGuestById = async (id: string) => {
    return await guestModel.findOne({ guest_id: id })
}

export const updateGuestById = async (id: string, payload: IGuest) => {
    return await guestModel.findOneAndUpdate({ guest_id: id }, { $set: payload })
}

export const deleteGuestById = async (id: string) => {
    return await guestModel.findOneAndDelete({ guest_id: id })
}
