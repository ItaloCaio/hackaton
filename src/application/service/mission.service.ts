import {IMissionService} from '../port/mission.service.interface'
import {Mission} from '../domain/model/mission'
import {IQuery} from '../port/query.interface'
import {inject} from 'inversify'
import {Identifier} from '../../di/identifiers'
import {IMissionRepository} from '../port/mission.repoisotory.interface'

export class MissionService implements IMissionService {
    constructor(
        @inject(Identifier.MISSION_REPOSITORY)
        private readonly  _repo: IMissionRepository
    ) {
    }

   public add(item: Mission): Promise<Mission> {
       return this._repo.create(item)
    }

    public count(query: IQuery): Promise<number> {
        throw Error('Not implemented yet!')    }

    public getAll(query: IQuery): Promise<Array<Mission>> {
        throw Error('Not implemented yet!')    }

    public getById(id: string, query: IQuery): Promise<Mission> {
        throw Error('Not implemented yet!')    }

    public remove(id: string): Promise<boolean> {
        throw Error('Not implemented yet!')    }

    public update(item: Mission): Promise<Mission> {
        throw Error('Not implemented yet!')    }

}
