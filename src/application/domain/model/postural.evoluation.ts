import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {JsonUtils} from '../utils/json.utils'

export class PosturalEvoluation implements IJSONSerializable, IJSONDeserializable<PosturalEvoluation> {
    private _seated?: string
    private _orthostatism?: string
    private _transfers?: string

    get seated(): string | undefined{
        return this._seated
    }

    set seated(value: string | undefined) {
        this._seated = value
    }

    get orthostatism(): string | undefined{
        return this._orthostatism
    }

    set orthostatism(value: string | undefined) {
        this._orthostatism = value
    }

    get transfers(): string | undefined{
        return this._transfers
    }

    set transfers(value: string | undefined) {
        this._transfers = value
    }

    public fromJSON(json: any): PosturalEvoluation {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.seated !== undefined) this.seated = json.seated
        if (json.orthostatism !== undefined ) this.orthostatism = json.seated
        if (json.transfers !== undefined) this.transfers = json.transfers

        return this
    }

   public toJSON(): any {
       return {
           seated: this.seated,
           orthostatism: this.orthostatism,
           transfers: this.transfers
       }
    }
}
