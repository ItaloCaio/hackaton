import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {IJSONSerializable} from '../utils/json.serializable.interface'
import {AutomaticMotricityClassification} from './automatic.motricity.classification'
import {JsonUtils} from '../utils/json.utils'

export class AutomaticMotricity implements IJSONSerializable, IJSONDeserializable<AutomaticMotricity>{
    private _akinesia?: AutomaticMotricityClassification
    private _bradykinesia?: AutomaticMotricityClassification
    private _dystonia?: AutomaticMotricityClassification
    private _rest_tremor?: AutomaticMotricityClassification
    private _action_tremor?: AutomaticMotricityClassification

    get akinesia(): AutomaticMotricityClassification | undefined {
        return this._akinesia
    }

    set akinesia(value: AutomaticMotricityClassification | undefined)  {
        this._akinesia = value
    }

    get bradykinesia(): AutomaticMotricityClassification | undefined{
        return this._bradykinesia
    }

    set bradykinesia(value: AutomaticMotricityClassification | undefined) {
        this._bradykinesia = value
    }

    get dystonia(): AutomaticMotricityClassification | undefined {
        return this._dystonia
    }

    set dystonia(value: AutomaticMotricityClassification | undefined) {
        this._dystonia = value
    }

    get rest_tremor(): AutomaticMotricityClassification | undefined{
        return this._rest_tremor
    }

    set rest_tremor(value: AutomaticMotricityClassification | undefined) {
        this._rest_tremor = value
    }

    get action_tremor(): AutomaticMotricityClassification | undefined{
        return this._action_tremor
    }

    set action_tremor(value: AutomaticMotricityClassification | undefined) {
        this._action_tremor = value
    }

    public fromJSON(json: any): AutomaticMotricity  {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.akinesia !== undefined) this.akinesia = new AutomaticMotricityClassification().fromJSON(json.akinesia)
        if (json.bradykinesia !== undefined) this.bradykinesia =
            new AutomaticMotricityClassification().fromJSON(json.bradykinesia)
        if (json.dystonia !== undefined) this.dystonia = new AutomaticMotricityClassification().fromJSON(json.dystonia)
        if (json.rest_tremor !== undefined) this.rest_tremor = new AutomaticMotricityClassification().fromJSON(json.rest_tremor)
        if (json.action_tremor !== undefined) this.action_tremor =
            new AutomaticMotricityClassification().fromJSON(json.action_tremor)

        return this
    }

    public toJSON(): any {
        return {
            akinesia: this.akinesia ? this.akinesia.toJSON() : undefined,
            bradykinesia: this.bradykinesia ? this.bradykinesia.toJSON() : undefined,
            dystonia: this.dystonia ? this.dystonia.toJSON() : undefined,
            rest_tremor: this.rest_tremor ? this.rest_tremor.toJSON() : undefined,
            action_tremor: this.action_tremor ? this.action_tremor.toJSON() : undefined
        }
    }

}
