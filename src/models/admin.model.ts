import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            default: ''
        }
    },
    { timestamps: true }
)

const adminModel = mongoose.model('admin', adminSchema)

export default adminModel
