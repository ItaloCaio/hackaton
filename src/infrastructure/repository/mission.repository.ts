import {IMissionRepository} from '../../application/port/mission.repoisotory.interface'
import {BaseRepository} from './base/base.repository'
import {Mission} from '../../application/domain/model/mission'
import {MissionEntity} from '../entity/mission.entity'
import {inject, injectable} from 'inversify'
import {Identifier} from '../../di/identifiers'
import {IEntityMapper} from '../port/entity.mapper.interface'
import {ILogger} from '../../utils/custom.logger'

@injectable()
export class MissionRepository  extends BaseRepository<Mission, MissionEntity> implements IMissionRepository{

    constructor(
        @inject(Identifier.MISSION_REPO_MODEL) readonly _repoModel: any,
        @inject(Identifier.MISSION_ENTITY_MAPPER)
        readonly _entityMapper: IEntityMapper<Mission, MissionEntity>,
        @inject(Identifier.LOGGER) readonly _logger: ILogger
    ) {
        super(_repoModel, _entityMapper, _logger)
    }

}
