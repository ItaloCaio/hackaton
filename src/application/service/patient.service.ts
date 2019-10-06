import {IPatientService} from '../port/patient.service.interface'
import {inject, injectable} from 'inversify'
import {Identifier} from '../../di/identifiers'
import {IPatientRepository} from '../port/patient.repositor.interface'
import {Patient} from '../domain/model/patient'
import {IQuery} from '../port/query.interface'
import {ResourceTypes} from '../domain/utils/resource.types'

@injectable()
export class PatientService implements IPatientService{
    constructor(
        @inject(Identifier.PATIENT_REPOSITORY)
        private readonly  _repo: IPatientRepository
    ) {
    }
   public async add(item: Patient): Promise<Patient> {
        return this._repo.create(item)
    }

    public count(query: IQuery): Promise<number> {
        throw Error('Not implemented yet!')
    }

    public async getAll(query: IQuery): Promise<Array<Patient>> {
        query.addFilter({ type: ResourceTypes.PATIENT })
        return this._repo.find(query)
    }

    public getById(id: string, query: IQuery): Promise<Patient> {
        throw Error('Not implemented yet!')
    }

    public remove(id: string): Promise<boolean> {
        throw Error('Not implemented yet!')
    }

    public update(item: Patient): Promise<Patient> {
        throw Error('Not implemented yet!')
    }

}
