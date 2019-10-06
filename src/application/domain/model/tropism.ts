import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {TropismTypes} from '../utils/tropism.types'
import {JsonUtils} from '../utils/json.utils'

export class Tropism implements IJSONSerializable, IJSONDeserializable<Tropism> {
    private _type?: TropismTypes
    private _local?: string

    get type(): TropismTypes | undefined{
        return this._type
    }

    set type(value: TropismTypes | undefined) {
        this._type = value
    }

    get local(): string | undefined {
        return this._local
    }

    set local(value: string | undefined) {
        this._local = value
    }

    public fromJSON(json: any): Tropism {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.type !== undefined) this.type = json.type
        if (json.local !== undefined) this.local = json.local

        return this
    }

    public toJSON(): any {
        return {
            type: this.type,
            local: this.local
        }
    }
}
