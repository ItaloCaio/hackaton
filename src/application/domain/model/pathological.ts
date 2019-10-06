import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {PersonHistoryTypes} from '../utils/person.history.types'
import {JsonUtils} from '../utils/json.utils'

export class Pathological implements IJSONSerializable, IJSONDeserializable<Pathological> {

    private _person_history?: PersonHistoryTypes
    private _family_history?: string
    private _socio_history?: string

    get person_history(): PersonHistoryTypes | undefined {
        return this._person_history
    }

    set person_history(value: PersonHistoryTypes | undefined) {
        this._person_history = value
    }

    get family_history(): string | undefined {
        return this._family_history
    }

    set family_history(value: string | undefined) {
        this._family_history = value
    }

    get socio_history(): string | undefined {
        return this._socio_history
    }

    set socio_history(value: string | undefined) {
        this._socio_history = value
    }

    public fromJSON(json: any): Pathological {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.person_history !== undefined) this.person_history = json.person_history
        if (json.family_history !== undefined) this.family_history = json.family_history
        if (json.socio_history !== undefined) this.socio_history = json.socio_history

        return this
    }

    public toJSON(): any {
        return {
            person_history: this.person_history,
            family_history: this.family_history,
            socio_history: this.socio_history
        }

    }
}
