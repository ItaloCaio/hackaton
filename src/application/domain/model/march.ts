import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {MarchClassificationTypes} from '../utils/march.classification.types'
import {JsonUtils} from '../utils/json.utils'

export class March implements IJSONSerializable, IJSONDeserializable<March> {

    private _antegrade?: MarchClassificationTypes
    private _side?: MarchClassificationTypes
    private _retrograde ?: MarchClassificationTypes
    private _type?: string
    get antegrade(): MarchClassificationTypes | undefined {
        return this._antegrade
    }

    set antegrade(value: MarchClassificationTypes | undefined) {
        this._antegrade = value
    }

    get side(): MarchClassificationTypes | undefined {
        return this._side
    }

    set side(value: MarchClassificationTypes | undefined) {
        this._side = value
    }

    get type(): string | undefined {
        return this._type
    }

    set type(value: string | undefined) {
        this._type = value
    }

    get retrograde(): MarchClassificationTypes | undefined {
        return this._retrograde
    }

    set retrograde(value: MarchClassificationTypes | undefined) {
        this._retrograde = value
    }

    public fromJSON(json: any): March {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.antegrade !== undefined) this.antegrade = json.antegrade
        if (json.side !== undefined) this.side = json.side
        if (json.retrograde !== undefined) this.retrograde = json.retrograde
        if (json.type !== undefined) this.type = json.type
        return this
    }

    public toJSON(): any {
        return {
            antegrade: this.antegrade,
            side: this.side,
            retrograde: this.retrograde,
            type: this.type
        }
    }

}
