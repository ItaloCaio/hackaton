import {IJSONSerializable} from '../utils/json.serializable.interface'
import {IJSONDeserializable} from '../utils/json.deserializable.interface'
import {ColorRaceTypes} from '../utils/color.race.types'
import {ScholarityLevelTypes} from '../utils/scholarity.level.types'
import {CivilStatusTypes} from '../utils/civil.status.types'
import {Andress} from './andress'
import {JsonUtils} from '../utils/json.utils'

export class SociodemographicRecord implements IJSONSerializable, IJSONDeserializable<SociodemographicRecord> {


    private _adress?: Andress
    private _age?: number
    private _birth_date?: string
    private _occupation?: string
    private _surgical_procedure?: boolean
    private _color_race?: ColorRaceTypes
    private _mother_scholarity?: ScholarityLevelTypes
    private _civil_status?: CivilStatusTypes
    private _curator_name?: string
    private _telephone?: string


    get adress(): Andress | undefined {
        return this._adress
    }

    set adress(value: Andress | undefined) {
        this._adress = value
    }

    get age(): number | undefined {
        return this._age
    }

    set age(value: number | undefined) {
        this._age = value
    }

    get birth_date(): string | undefined {
        return this._birth_date
    }

    set birth_date(value: string | undefined) {
        this._birth_date = value
    }

    get occupation(): string | undefined {
        return this._occupation
    }

    set occupation(value: string | undefined) {
        this._occupation = value
    }

    get surgical_procedure(): boolean | undefined {
        return this._surgical_procedure
    }

    set surgical_procedure(value: boolean | undefined) {
        this._surgical_procedure = value
    }

    get color_race(): ColorRaceTypes | undefined {
        return this._color_race
    }

    set color_race(value: ColorRaceTypes | undefined) {
        this._color_race = value
    }

    get mother_scholarity(): ScholarityLevelTypes | undefined {
        return this._mother_scholarity
    }

    set mother_scholarity(value: ScholarityLevelTypes | undefined) {
        this._mother_scholarity = value
    }

    get civil_status(): CivilStatusTypes | undefined {
        return this._civil_status
    }

    set civil_status(value: CivilStatusTypes | undefined) {
        this._civil_status = value
    }

    get curator_name(): string | undefined {
        return this._curator_name
    }

    set curator_name(value: string | undefined) {
        this._curator_name = value
    }

    get telephone(): string | undefined {
        return this._telephone
    }

    set telephone(value: string | undefined) {
        this._telephone = value
    }

    public fromJSON(json: any): SociodemographicRecord {
        if (!json) return this
        if (typeof json === 'string' && JsonUtils.isJsonString(json)) {
            json = JSON.parse(json)
        }
        if (json.adress !== undefined) this.adress = new Andress().fromJSON(json.adress)
        if (json.age !== undefined) this.age = json.age
        if (json.birth_date !== undefined) this.birth_date = json.birth_date
        if (json.occupation !== undefined) this.occupation = json.occupation
        if (json.surgical_procedure !== undefined) this.surgical_procedure = json.surgical_procedure
        if (json.color_race !== undefined) this.color_race = json.color_race
        if (json.mother_scholarity !== undefined) this.mother_scholarity = json.mother_scholarity
        if (json.civil_status !== undefined) this.civil_status = json.civil_status
        if (json.curator_name !== undefined) this.curator_name = json.curator_name
        if (json.telephone !== undefined) this.telephone = json.telephone
        return this
    }

    public toJSON(): any {
        return {
            adress: this.adress ? this.adress.toJSON() : undefined,
            age: this.age,
            birth_date: this.birth_date,
            occupation: this.occupation,
            surgical_procedure: this.surgical_procedure,
            color_race: this.color_race,
            mother_scholarity: this.mother_scholarity,
            civil_status: this.civil_status,
            curator_name: this.curator_name,
            telephone: this.telephone
        }
    }
}
