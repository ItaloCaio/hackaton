/**
 * Implementation of generic entity.
 * Theoretically, the other entity must inherit it.
 *
 * @abstract
 */
export abstract class Entity {
    private _id?: string
    private _type?: string

    protected constructor(id?: string) {
        this._id = id
    }

    get id(): string | undefined {
        return this._id
    }

    set id(value: string | undefined) {
        this._id = value
    }

    get type(): string | undefined{
        return this._type
    }

    set type(value: string | undefined) {
        this._type = value
    }
}
