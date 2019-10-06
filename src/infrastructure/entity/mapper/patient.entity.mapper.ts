import {IEntityMapper} from '../../port/entity.mapper.interface'
import {Patient} from '../../../application/domain/model/patient'
import {PatientEntity} from '../patient.entity'
import {injectable} from 'inversify'
import {SociodemographicRecord} from '../../../application/domain/model/sociodemographic.record'
import {MotorSytem} from '../../../application/domain/model/motor.sytem'

@injectable()
export class PatientEntityMapper implements IEntityMapper<Patient, PatientEntity> {

    public jsonToModel(json: any): Patient {
        const result: Patient = new Patient()

        if (!json) return result
        if (json.id !== undefined) result.id = json.id
        if (json.sociodemographic !== undefined) result.sociodemographic =
            new SociodemographicRecord().fromJSON(json.sociodemographic)
        if (json.use_medication !== undefined) result.use_medication = json.use_medication
        if (json.motor_system !== undefined) result.motor_system =
            new MotorSytem().fromJSON(json.motor_system)

        return result
    }

    public modelEntityToModel(item: PatientEntity): Patient {
        throw Error('Not implemented!')
    }

    public modelToModelEntity(item: Patient): PatientEntity {
        const result: PatientEntity = new PatientEntity()

        if (item.id !== undefined) result.id = item.id
        if (item.sociodemographic !== undefined) result.sociodemographic =
            item.sociodemographic.toJSON()
        if (item.use_medication !== undefined) result.use_medication = item.use_medication
        if (item.motor_system !== undefined) result.motor_system =
            item.motor_system.toJSON()

        return result
    }

    public transform(item: any): any {
        if (item instanceof Patient) return this.modelToModelEntity(item)

        return this.jsonToModel(item)
    }

}
