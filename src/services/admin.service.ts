import adminModel from '../models/admin.model'

export const findUserByEmail = async (email: string) => {
    console.log(adminModel.findOne({ email }))
    return await adminModel.findOne({ email })
}
