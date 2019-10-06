import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {JsonUtils} from '../utils/json.utils'

export class Andress implements IJSONSerializable, IJSONDeserializable<Andress> {
    private _andress_name?: string
    private _number?: string
    private _cep?: string

    get andress_name(): string | undefined {
        return this._andress_name
    }

    set andress_name(value: string | undefined) {
        this._andress_name = value
    }

    get number(): string | undefined {
        return this._number
    }

    set number(value: string | undefined) {
        this._number = value
    }

    get cep(): string | undefined {
        return this._cep
    }

    set cep(value: string | undefined) {
        this._cep = value
    }

    public fromJSON(json: any): Andress {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.andress_name !== undefined) this.andress_name = json.andress_name
        if (json.number !== undefined) this.number = json.number
        if (json.cep !== undefined) this.cep = json.cep
        return this
    }

    public toJSON(): any {
        return {
            andress_name: this.andress_name,
            number: this.number,
            cep: this.cep
        }
    }
}
