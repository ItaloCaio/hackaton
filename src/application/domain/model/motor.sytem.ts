import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {PosturalEvoluation} from './postural.evoluation'
import {March} from './march'
import {Tropism} from './tropism'
import {JsonUtils} from '../utils/json.utils'
import {LocomotionTypes} from '../utils/locomotion.types'
import {AutomaticMotricity} from './automatic.motricity'
import {ActiveMobility} from './active.mobility'

export class MotorSytem implements IJSONSerializable, IJSONDeserializable<MotorSytem>{
    private _trophism?: Tropism
    private _postural_avaliation?: PosturalEvoluation
    private _march?: March
    private _locomotion?: LocomotionTypes
    private _automatica_motricity?: AutomaticMotricity
    private _active_mobility?: ActiveMobility

    get trophism(): Tropism | undefined{
        return this._trophism
    }

    set trophism(value: Tropism | undefined) {
        this._trophism = value
    }

    get postural_avaliation(): PosturalEvoluation | undefined {
        return this._postural_avaliation
    }

    set postural_avaliation(value: PosturalEvoluation | undefined) {
        this._postural_avaliation = value
    }

    get march(): March | undefined{
        return this._march
    }

    set march(value: March | undefined) {
        this._march = value
    }

    get locomotion(): LocomotionTypes | undefined{
        return this._locomotion
    }

    set locomotion(value: LocomotionTypes | undefined) {
        this._locomotion = value
    }

    get automatica_motricity(): AutomaticMotricity | undefined{
        return this._automatica_motricity
    }

    set automatica_motricity(value: AutomaticMotricity | undefined) {
        this._automatica_motricity = value
    }

    get active_mobility(): ActiveMobility | undefined {
        return this._active_mobility
    }

    set active_mobility(value: ActiveMobility | undefined) {
        this._active_mobility = value
    }

    public fromJSON(json: any): MotorSytem {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json._trophism !== undefined) this.trophism = new Tropism().fromJSON(json._trophism)
        if (json.postural_avaliation !== undefined) this.postural_avaliation =
            new PosturalEvoluation().fromJSON(json.postural_avaliation)
        if (json.march !== undefined) this.march =
            new March().fromJSON(json.march)
        if (json.locomotion !== undefined) this.locomotion = json.locomotion
        if (json.automatica_motricity !== undefined) this.automatica_motricity =
            new AutomaticMotricity().fromJSON(json.automatica_motricity)
        if (json.active_mobility !== undefined) this.active_mobility =
            new ActiveMobility().fromJSON(json.active_mobility)

        return this
    }

    public toJSON(): any {
        return {
            trophism: this.trophism ? this.trophism.toJSON() : undefined
        }
    }

}
