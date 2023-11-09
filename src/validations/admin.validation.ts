import Joi from 'joi'
import IAdmin from '../types/admin.type'

export const createSessionValidation = (payload: IAdmin) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required()
    })

    return schema.validate(payload)
}

export const refreshSessionValidation = (payload: IAdmin) => {
    const schema = Joi.object({
        refreshToken: Joi.string().required()
    })

    return schema.validate(payload)
}
