import 'reflect-metadata'
import {Container} from 'inversify'
import {Identifier} from './identifiers'
import {ConnectionFactoryMongodb} from '../infrastructure/database/connection.factory.mongodb'
import {ConnectionMongodb} from '../infrastructure/database/connection.mongodb'
import {IConnectionDB} from '../infrastructure/port/connection.db.interface'
import {IConnectionFactory} from '../infrastructure/port/connection.factory.interface'
import {BackgroundService} from '../background/background.service'
import {App} from '../app'
import {CustomLogger, ILogger} from '../utils/custom.logger'
import {IEntityMapper} from '../infrastructure/port/entity.mapper.interface'
import {HomeController} from '../ui/controllers/home.controller'
import {IntegrationEventRepoModel} from '../infrastructure/database/schema/integration.event.schema'
import {IPatientService} from '../application/port/patient.service.interface'
import {IPatientRepository} from '../application/port/patient.repositor.interface'
import {PatientRepository} from '../infrastructure/repository/patient.repository'
import {PatientController} from '../ui/controllers/patient.controller'
import {PatientService} from '../application/service/patient.service'
import {PatientRepoModel} from '../infrastructure/database/schema/patient.schema'
import {PatientEntity} from '../infrastructure/entity/patient.entity'
import {PatientEntityMapper} from '../infrastructure/entity/mapper/patient.entity.mapper'
import {Patient} from '../application/domain/model/patient'

export class IoC {
    private readonly _container: Container

    /**
     * Creates an instance of DI.
     *
     * @private
     */
    constructor() {
        this._container = new Container()
        this.initDependencies()
    }

    /**
     * Get Container inversify.
     *
     * @returns {Container}
     */
    get container(): Container {
        return this._container
    }

    /**
     * Initializes injectable containers.
     *
     * @private
     * @return void
     */
    private initDependencies(): void {
        this._container.bind(Identifier.APP).to(App).inSingletonScope()

        // Controllers
        this._container.bind<HomeController>(Identifier.HOME_CONTROLLER)
            .to(HomeController).inSingletonScope()
        this._container.bind<PatientController>(Identifier.PATIENT_CONTROLLER)
            .to(PatientController).inSingletonScope()

        // Services
        this._container.bind<IPatientService>(Identifier.PATIENT_SERVICE)
            .to(PatientService).inSingletonScope()

        // Repositories
        this._container.bind<IPatientRepository>(Identifier.PATIENT_REPOSITORY)
            .to(PatientRepository).inSingletonScope()

        // Models
        this._container.bind(Identifier.PATIENT_REPO_MODEL)
            .toConstantValue(PatientRepoModel)
        this._container.bind(Identifier.INTEGRATION_EVENT_REPO_MODEL).toConstantValue(IntegrationEventRepoModel)

        // Mappers
        this._container
            .bind<IEntityMapper<Patient, PatientEntity>>
            (Identifier.PATIENT_ENTITY_MAPPER)
            .to(PatientEntityMapper).inSingletonScope()

        // Background Services
        this._container
            .bind<IConnectionFactory>(Identifier.MONGODB_CONNECTION_FACTORY)
            .to(ConnectionFactoryMongodb).inSingletonScope()
        this._container
            .bind<IConnectionDB>(Identifier.MONGODB_CONNECTION)
            .to(ConnectionMongodb).inSingletonScope()
        this._container
            .bind(Identifier.BACKGROUND_SERVICE)
            .to(BackgroundService).inSingletonScope()

        // Log
        this._container.bind<ILogger>(Identifier.LOGGER).to(CustomLogger).inSingletonScope()
    }
}

export const DIContainer = new IoC().container
