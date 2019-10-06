import Mongoose, {Schema} from 'mongoose'

interface IMissionModel extends Mongoose.Document {

}

const patientSchema = new Mongoose.Schema({
        patient_id: {
            type: Schema.Types.ObjectId,
            required: 'Id of patient associated with the mission is required!'
        },
        type: {type: String},
        hour: {type: String},
        activity: {type: String},
        details: {type: String}

    },

    {
        timestamps: {createdAt: 'created_at', updatedAt: false},
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id
                delete ret._id
                delete ret.__v
                return ret
            }
        }
    })

export const MissionRepoModel =
    Mongoose.model<IMissionModel>('Mission', patientSchema)
