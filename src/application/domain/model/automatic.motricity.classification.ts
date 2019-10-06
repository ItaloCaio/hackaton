import {AutomaticMotricityClassificationTypes} from '../utils/automatic.motricity.classification.types'
import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {JsonUtils} from '../utils/json.utils'

export class AutomaticMotricityClassification implements IJSONSerializable, IJSONDeserializable<AutomaticMotricityClassification>{
    private _right?: AutomaticMotricityClassificationTypes
    private _left?: AutomaticMotricityClassificationTypes

    get right(): AutomaticMotricityClassificationTypes | undefined {
        return this._right
    }

    set right(value: AutomaticMotricityClassificationTypes | undefined) {
        this._right = value
    }

    get left(): AutomaticMotricityClassificationTypes | undefined {
        return this._left
    }

    set left(value: AutomaticMotricityClassificationTypes | undefined) {
        this._left = value
    }

    public fromJSON(json: any): AutomaticMotricityClassification {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.right !== undefined) this.right = json.right
        if ( json.left !== undefined) this.left = json.left

        return this
    }

    public toJSON(): any {
        return {
            right: this.right,
            left: this.left
        }
    }

}
