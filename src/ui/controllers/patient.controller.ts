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
import {ApiException} from '../exception/api.exception'
import {Strings} from '../../utils/strings'

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
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    @httpGet('/:patient_id')
    public async getPatientById(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const result: Patient = await this._service.getById(
                req.params.patient_id, new Query().fromJSON(req.query))
            if (!result) return res.status(HttpStatus.NOT_FOUND).send(this.getMessageNotFound())
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
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

    private getMessageNotFound(): object {
        return new ApiException(
            HttpStatus.NOT_FOUND,
            Strings.PATIENT.NOT_FOUND,
            Strings.PATIENT.NOT_FOUND_DESCRIPTION
        ).toJson()
    }

}
