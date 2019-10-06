import Mongoose from 'mongoose'

interface IPatientModel extends Mongoose.Document {

}

const patientSchema = new Mongoose.Schema({
        type: { type: String },
        name: { type: String },
        login: { type: String },
        password: { type: String }
        /*
        sociodemographic_record: {
            name: {type: String},
            age: {type: Number},
            birth_date: { type: String},
            occupation: {type: String },
            surgical_procedure: {type: Boolean},
            color_race: {type: String},
            mother_scholarity: {type: String},
            civil_status: {type: String},
            curator_name: {type: String},
            telephone: {type: String}
        }
         */
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: false },
        toJSON: {
            transform: (doc, ret) => {
                ret.id = ret._id
                delete ret._id
                delete ret.__v
                return ret
            }
        }
    })

export const PatientRepoModel =
    Mongoose.model<IPatientModel>('Patient', patientSchema)
