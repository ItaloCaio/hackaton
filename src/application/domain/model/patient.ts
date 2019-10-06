import {Entity} from './entity'
import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {JsonUtils} from '../utils/json.utils'
import {SociodemographicRecord} from './sociodemographic.record'
import {MotorSytem} from './motor.sytem'
import {ResourceTypes} from '../utils/resource.types'

export class Patient extends Entity implements IJSONSerializable, IJSONDeserializable<Patient> {
    private _name?: string
    private _login?: string
    private _password?: string

    private _sociodemographic?: SociodemographicRecord
    private _use_medication?: string
    private _motor_system?: MotorSytem

    public constructor() {
        super()
        super.type = ResourceTypes.PATIENT
    }
    get sociodemographic(): SociodemographicRecord | undefined {
        return this._sociodemographic
    }

    set sociodemographic(value: SociodemographicRecord | undefined) {
        this._sociodemographic = value
    }

    get use_medication(): string | undefined {
        return this._use_medication
    }

    set use_medication(value: string | undefined) {
        this._use_medication = value
    }

    get motor_system(): MotorSytem | undefined {
        return this._motor_system
    }

    set motor_system(value: MotorSytem | undefined) {
        this._motor_system = value
    }

    get name(): string | undefined {
        return this._name
    }

    set name(value: string | undefined) {
        this._name = value
    }

    get login(): string | undefined{
        return this._login
    }

    set login(value: string | undefined) {
        this._login = value
    }

    get password(): string | undefined{
        return this._password
    }

    set password(value: string | undefined) {
        this._password = value
    }

    public fromJSON(json: any): Patient {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.id !== undefined) super.id = json.id
        if (json.name !== undefined) this.name = json.name
        if (json.login !== undefined) this.login = json.login
        if (json.password !== undefined) this.password = json.password
        if (json.sociodemographic !== undefined) this.sociodemographic =
            new SociodemographicRecord().fromJSON(json.sociodemographic)
        if (json.use_medication !== undefined) this.use_medication = json.use_medication
        if (json.motor_system !== undefined) this.motor_system =
            new MotorSytem().fromJSON(json.motor_system)

        return this
    }

    public toJSON(): any {
        return {
            id: super.id,
            sociodemographic: this.sociodemographic ? this.sociodemographic.toJSON() : undefined,
            use_medication: this.use_medication,
            motor_system: this.motor_system ? this.motor_system.toJSON() : undefined,
            name: this.name,
            login: this.login,
            password: this.password
        }

    }
}
