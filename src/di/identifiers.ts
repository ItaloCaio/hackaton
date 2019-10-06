/**
 * Constants used in dependence injection.
 *
 * @abstract
 */
export abstract class Identifier {
    public static readonly APP: any = Symbol.for('App')

    // Controllers
    public static readonly HOME_CONTROLLER: any = Symbol.for('HomeController')
    public static readonly PATIENT_CONTROLLER: any = Symbol.for('PatientController')
    // Services
    public static readonly PATIENT_SERVICE: any = Symbol.for('PatientService')

    // Repositories
    public static readonly PATIENT_REPOSITORY: any = Symbol.for('PatientRepository')
    public static readonly INTEGRATION_EVENT_REPOSITORY: any = Symbol.for('IntegrationEventRepository')

    // Models
    public static readonly PATIENT_REPO_MODEL: any = Symbol.for('PatientRepoModel')
    public static readonly INTEGRATION_EVENT_REPO_MODEL: any = Symbol.for('IntegrationEventRepoModel')

    // Mappers
    public static readonly PATIENT_ENTITY_MAPPER: any = Symbol.for('PatientEntityMapper')

    // Background Services
    public static readonly MONGODB_CONNECTION_FACTORY: any = Symbol.for('ConnectionFactoryMongodb')
    public static readonly MONGODB_CONNECTION: any = Symbol.for('ConnectionMongodb')
    public static readonly RABBITMQ_CONNECTION_FACTORY: any = Symbol.for('ConnectionFactoryRabbitMQ')
    public static readonly RABBITMQ_CONNECTION: any = Symbol.for('ConnectionRabbitMQ')
    public static readonly RABBITMQ_EVENT_BUS: any = Symbol.for('EventBusRabbitMQ')
    public static readonly BACKGROUND_SERVICE: any = Symbol.for('BackgroundService')
    // Tasks

    // Log
    public static readonly LOGGER: any = Symbol.for('CustomLogger')
}
