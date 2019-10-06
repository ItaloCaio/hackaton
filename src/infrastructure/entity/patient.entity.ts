import {SociodemographicRecord} from '../../application/domain/model/sociodemographic.record'
import {MotorSytem} from '../../application/domain/model/motor.sytem'

export class PatientEntity {
    public id?: string
    public sociodemographic?: SociodemographicRecord
    public use_medication?: string
    public motor_system?: MotorSytem
    public name?: string
    public login?: string
    public password?: string
    public type?: string
}
