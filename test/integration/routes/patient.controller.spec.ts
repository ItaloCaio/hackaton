import { IConnectionDB } from '../../../src/infrastructure/port/connection.db.interface'
import { DIContainer } from '../../../src/di/di'
import { Identifier } from '../../../src/di/identifiers'
import { App } from '../../../src/app'
import { Patient } from '../../../src/application/domain/model/patient'
import { DefaultEntityMock } from '../../mocks/models/default.entity.mock'
import { PatientRepoModel } from '../../../src/infrastructure/database/schema/patient.schema'
import { expect } from 'chai'

const dbConnection: IConnectionDB = DIContainer.get(Identifier.MONGODB_CONNECTION)
const app: App = DIContainer.get(Identifier.APP)
const request = require('supertest')(app.getExpress())

describe('Routes: Patient', () => {

    const activity: Patient =
        new Patient().fromJSON(DefaultEntityMock.PATIENT)
    console.log(activity.toJSON())

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

    describe('POST ', () => {
        context('when save a new patient', () => {
            it('should return status code 200 and the saved patient', () => {
                return request
                    .post(`/patients`)
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

    describe('GET /patients/', () => {
        context('when get all patients', () => {
            it('should return status code 200', () => {
                return request
                    .get(`/patients`)
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

    describe('GET  patients/:patient_id', () => {
        context('when get a unique patient ', () => {
            it('should return status code 200 and a patient', () => {
                return request
                    .get(`/patients/${activity.id}`)
                    .set('Content-Type', 'application/json')
                    .expect(200)
                    .then(res => {
                        expect(res.body).to.have.property('id')
                    })
            })
        })
    })

})

async function deleteAllActivities(doc) {
    return PatientRepoModel.deleteMany({})
}
