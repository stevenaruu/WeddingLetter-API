import Joi from 'joi'
import IGuest from '../types/guest.type'

export const createGuestValidation = (payload: IGuest) => {
    const schema = Joi.object({
        guest_id: Joi.string().required(),
        name: Joi.string().required(),
        rsvp: Joi.number().allow('', null),
        comment: Joi.string().allow('', null),
        is_comment: Joi.boolean().required()
    })

    return schema.validate(payload)
}

export const updateGuestValidation = (payload: IGuest) => {
    const schema = Joi.object({
        guest_id: Joi.string().allow('', null),
        name: Joi.string().allow('', null),
        rsvp: Joi.number().allow('', null),
        comment: Joi.string().allow('', null),
        is_comment: Joi.boolean().required()
    })

    return schema.validate(payload)
}
