import mongoose from 'mongoose'

const guestSchema = new mongoose.Schema(
    {
        guest_id: {
            type: String,
            unique: true
        },
        name: {
            type: String
        },
        rsvp: {
            type: Number
        },
        comment: {
            type: String
        },
        is_comment: {
            type: Boolean
        }
    },
    { timestamps: true }
)

const guestModel = mongoose.model('guest', guestSchema)

export default guestModel
