import {Entity} from './entity'
import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {JsonUtils} from '../utils/json.utils'

export class Mission extends Entity implements IJSONSerializable, IJSONDeserializable<Mission>{
    private _hour?: string
    private _activity?: string
    private _details?: string

    public constructor(){
        super()
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

    public fromJSON(json: any): Mission {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.id !== undefined) super.id = json.id
        if (json.hour !== undefined) this.hour = json.hour
        if (json.activity !== undefined) this.activity = json.hour
        if (json.details !== undefined) this.details = json.details
        return this
    }

    public toJSON(): any {
        return{
            id: super.id,
            hour: this.hour,
            activity: this.activity,
            details: this.details
        }
    }

}
