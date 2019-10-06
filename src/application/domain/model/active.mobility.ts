import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {ActiveMobilityAvaliation} from './active.mobility.avaliation'
import {JsonUtils} from '../utils/json.utils'

export class ActiveMobility implements IJSONSerializable, IJSONDeserializable<ActiveMobility> {
    private _mmss?: ActiveMobilityAvaliation
    private _mmii?: ActiveMobilityAvaliation
    private _body?: ActiveMobilityAvaliation

    get mmss(): ActiveMobilityAvaliation | undefined {
        return this._mmss
    }

    set mmss(value: ActiveMobilityAvaliation | undefined) {
        this._mmss = value
    }

    get mmii(): ActiveMobilityAvaliation | undefined {
        return this._mmii
    }

    set mmii(value: ActiveMobilityAvaliation | undefined) {
        this._mmii = value
    }

    get body(): ActiveMobilityAvaliation | undefined {
        return this._body
    }

    set body(value: ActiveMobilityAvaliation | undefined) {
        this._body = value
    }

    public fromJSON(json: any): ActiveMobility {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.mmss !== undefined) this.mmss =
            new ActiveMobilityAvaliation().fromJSON(json.mmss)
        if (json.mmii !== undefined) this.mmii =
            new ActiveMobilityAvaliation().fromJSON(json.mmii)
        if (json.body !== undefined) this.body =
            new ActiveMobilityAvaliation().fromJSON(json.body)

        return this
    }

    public toJSON(): any {
        return {
            mmss: this.mmss ? this.mmss.toJSON() : undefined,
            mmii: this.mmii ? this.mmii.toJSON() : undefined,
            body: this.body ? this.body.toJSON() : undefined
        }
    }
}
