import {Entity} from './entity'
import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {JsonUtils} from '../utils/json.utils'
import {ResourceTypes} from '../utils/resource.types'

export class Mission extends Entity implements IJSONSerializable, IJSONDeserializable<Mission>{
    private _hour?: string
    private _activity?: string
    private _details?: string
    private _patient_id?: string

    public constructor(){
        super()
        super.type = ResourceTypes.MISSION
    }

    get hour(): string | undefined {
        return this._hour
    }

    set hour(value: string | undefined) {
        this._hour = value
    }

    get activity(): string | undefined{
        return this._activity
    }

    set activity(value: string | undefined) {
        this._activity = value
    }

    get details(): string | undefined {
        return this._details
    }

    set details(value: string | undefined) {
        this._details = value
    }

    get patient_id(): string | undefined{
        return this._patient_id
    }

    set patient_id(value: string | undefined) {
        this._patient_id = value
    }

    public fromJSON(json: any): Mission {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.id !== undefined) super.id = json.id
        if (json.patient_id !== undefined) this.patient_id = json.patient_id
        if (json.hour !== undefined) this.hour = json.hour
        if (json.activity !== undefined) this.activity = json.hour
        if (json.details !== undefined) this.details = json.details
        return this
    }

    public toJSON(): any {
        return{
            id: super.id,
            patient_id: this.patient_id,
            hour: this.hour,
            activity: this.activity,
            details: this.details
        }
    }

}
