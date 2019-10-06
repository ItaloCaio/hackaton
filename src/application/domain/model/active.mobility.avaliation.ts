import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {ActiveMobilityTypes} from '../utils/active.mobility.types'
import {JsonUtils} from '../utils/json.utils'

export class ActiveMobilityAvaliation implements IJSONSerializable, IJSONDeserializable<ActiveMobilityAvaliation> {
    private _local ?: string
    private _obs?: string
    private _status?: ActiveMobilityTypes

    get local(): string | undefined {
        return this._local
    }

    set local(value: string | undefined) {
        this._local = value
    }

    get obs(): string | undefined {
        return this._obs
    }

    set obs(value: string | undefined) {
        this._obs = value
    }

    get status(): ActiveMobilityTypes | undefined {
        return this._status
    }

    set status(value: ActiveMobilityTypes | undefined) {
        this._status = value
    }

    public fromJSON(json: any): ActiveMobilityAvaliation {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.local !== undefined) this.local = json.local
        if (json.obs !== undefined) this.obs = json.obs
        if (json.status !== undefined) this.status = json.status
        return this
    }

    public toJSON(): any {
        return {
            local: this.local,
            obs: this.obs,
            status: this.status
        }
    }
}
