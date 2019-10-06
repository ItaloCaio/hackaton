import { IConnectionDB } from '../../../src/infrastructure/port/connection.db.interface'
import { DIContainer } from '../../../src/di/di'
import { Identifier } from '../../../src/di/identifiers'
import { App } from '../../../src/app'
import { DefaultEntityMock } from '../../mocks/models/default.entity.mock'
import { expect } from 'chai'
import { Mission } from '../../../src/application/domain/model/mission'
import { MissionRepoModel } from '../../../src/infrastructure/database/schema/mission.schema'

const dbConnection: IConnectionDB = DIContainer.get(Identifier.MONGODB_CONNECTION)
const app: App = DIContainer.get(Identifier.APP)
const request = require('supertest')(app.getExpress())

describe('Routes: Mission', () => {

    const activity: Mission =
        new Mission().fromJSON(DefaultEntityMock.MISSION)

    before(async () => {
            try {
                await dbConnection.tryConnect(0, 500)
                await deleteAllActivities({})
            } catch (err) {
                throw new Error('Failure on Patient test: ' + err.message)
            }
        }
    )

    after(async () => {
        try {
            await deleteAllActivities({})
            await dbConnection.dispose()
        } catch (err) {
            throw new Error('Failure on Patient test: ' + err.message)
        }
    })

    describe('POST /patients/:patient_id/missions', () => {
        context('when save a new patient', () => {
            it('should return status code 200 and the saved patient', () => {
                return request
                    .post(`/patients/${activity.patient_id}/missions`)
                    .send(activity.toJSON())
                    .set('Content-Type', 'application/json')
                    .expect(201)
                    .then(res => {
                        expect(res.body).to.have.property('id')
                        activity.id = res.body.id
                    })
            })
        })
    })

    describe('GET /patients/${activity.patient_id}/missions', () => {
        context('when get all patients', () => {
            it('should return status code 200', () => {
                return request
                    .get(`/patients/${activity.patient_id}/missions`)
                    .set('Content-Type', 'application/json')
                    .expect(200)
                    .then(res => {
                        expect(res.body).is.an.instanceOf(Array)
                        expect(res.body.length).to.eql(1)
                        expect(res.body[0]).to.have.property('id', activity.id)
                    })
            })
        })
    })
})

async function deleteAllActivities(doc) {
    return MissionRepoModel.deleteMany({})
}
