import {controller, httpGet, httpPost, request, response} from 'inversify-express-utils'
import {inject} from 'inversify'
import {Identifier} from '../../di/identifiers'
import {ILogger} from '../../utils/custom.logger'
import {Request, Response} from 'express'
import HttpStatus from 'http-status-codes'
import {ApiExceptionManager} from '../exception/api.exception.manager'
import {Query} from '../../infrastructure/repository/query/query'
import {Patient} from '../../application/domain/model/patient'
import {IPatientService} from '../../application/port/patient.service.interface'

@controller('/patients')
export class PatientController {

    constructor(
        @inject(Identifier.PATIENT_SERVICE) private readonly _service: IPatientService,
        @inject(Identifier.LOGGER) readonly _logger: ILogger
    ) {
    }

    @httpPost('/')
    public async addPatient(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            console.log(res)
            const patient: Patient = new Patient().fromJSON(req.body)
            const result: Patient = await this._service.add(patient)
            return res.status(HttpStatus.CREATED).send(this.toJSONView(result))
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    @httpGet('/')
    public async getPatient(
        @request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: Query = new Query().fromJSON(req.query)
            const result: Array<Patient> = await this._service.getAll(query)
            console.log(result)
            const patient: Patient = new Patient().fromJSON({name: 'Jose', password: '123', login: 'jose'})
            return res.status(HttpStatus.OK).send(this.toJSONView(patient))
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    private toJSONView(item: Patient | Array<Patient>): object {
        if (item instanceof Array) {
            return item.map(value => {
                value.type = undefined
                return value.toJSON()
            })
        }
        item.type = undefined
        return item.toJSON()
    }

}
