import {controller, httpGet, httpPost, request, response} from 'inversify-express-utils'
import {inject} from 'inversify'
import {Identifier} from '../../di/identifiers'
import {ILogger} from '../../utils/custom.logger'
import {IMissionService} from '../../application/port/mission.service.interface'
import {Request, Response} from 'express'
import HttpStatus from 'http-status-codes'
import {ApiExceptionManager} from '../exception/api.exception.manager'
import {Query} from '../../infrastructure/repository/query/query'
import {Mission} from '../../application/domain/model/mission'

@controller('/patients/:patient_id/missions')
export class MissionController{

    constructor(
        @inject(Identifier.MISSION_SERVICE) private readonly _service: IMissionService,
        @inject(Identifier.LOGGER) readonly _logger: ILogger
    ) {
    }

    @httpPost('/')
    public async addMission(@request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const mission: Mission = new Mission().fromJSON(req.body)
            mission.patient_id = req.params.patient_id
            const result: Mission = await this._service.add(mission)
            return res.status(HttpStatus.CREATED).send(this.toJSONView(result))
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    @httpGet('/')
    public async getMissions(
        @request() req: Request, @response() res: Response): Promise<Response> {
        try {
            const query: Query = new Query().fromJSON(req.query)
            query.addFilter({ patient_id: req.params.patient_id })
            const result: Array<Mission> = await this._service.getAll(query)
            return res.status(HttpStatus.OK).send(this.toJSONView(result))
        } catch (err) {
            const handleError = ApiExceptionManager.build(err)
            return res.status(handleError.code).send(handleError.toJson())
        }
    }

    private toJSONView(item: Mission | Array<Mission>): object {
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
