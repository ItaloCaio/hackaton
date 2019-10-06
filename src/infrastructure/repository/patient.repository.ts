import {BaseRepository} from './base/base.repository'
import {inject, injectable} from 'inversify'
import {Patient} from '../../application/domain/model/patient'
import {PatientEntity} from '../entity/patient.entity'
import {IPatientRepository} from '../../application/port/patient.repositor.interface'
import {Identifier} from '../../di/identifiers'
import {IEntityMapper} from '../port/entity.mapper.interface'
import {ILogger} from '../../utils/custom.logger'

@injectable()
export class PatientRepository extends BaseRepository<Patient, PatientEntity> implements IPatientRepository {

    constructor(
        @inject(Identifier.PATIENT_REPO_MODEL) readonly _repoModel: any,
        @inject(Identifier.PATIENT_ENTITY_MAPPER)
        readonly _entityMapper: IEntityMapper<Patient, PatientEntity>,
        @inject(Identifier.LOGGER) readonly _logger: ILogger
    ) {
        super(_repoModel, _entityMapper, _logger)
    }

}
