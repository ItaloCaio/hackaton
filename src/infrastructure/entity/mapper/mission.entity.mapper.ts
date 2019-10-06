import {IEntityMapper} from '../../port/entity.mapper.interface'
import {MissionEntity} from '../mission.entity'
import {Mission} from '../../../application/domain/model/mission'
import { injectable } from 'inversify'

@injectable()
export class MissionEntityMapper implements IEntityMapper<Mission, MissionEntity> {

    public jsonToModel(json: any): Mission {
        const result: Mission = new Mission()
        if (!json) return result
        if (json.id !== undefined) result.id = json.id
        if (json.type !== undefined) result.type = json.type
        if (json.patient_id !== undefined) result.patient_id = json.patient_id
        if (json.hour !== undefined) result.hour = json.hour
        if (json.activity !== undefined) result.activity = json.hour
        if (json.details !== undefined) result.details = json.details

        return result
    }

    public modelEntityToModel(item: MissionEntity): Mission {
        throw Error('Not implemented!')
    }

    public modelToModelEntity(item: Mission): MissionEntity {

        const result: MissionEntity = new MissionEntity()

        if (item.id !== undefined) result.id = item.id
        if (item.type !== undefined) result.type = item.type
        if (item.patient_id !== undefined) result.patient_id = item.patient_id
        if (item.hour !== undefined) result.hour = item.hour
        if (item.activity !== undefined) result.activity = item.activity
        if (item.details !== undefined) result.details = item.details

        return result
    }

    public transform(item: any): any {
        if (item instanceof Mission) return this.modelToModelEntity(item)

        return this.jsonToModel(item)
    }

}
