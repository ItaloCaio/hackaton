export abstract class DefaultEntityMock {
    public static readonly PATIENT: any = {
        id: '5ca23b9af2bb205b0262556b',
        name: 'Italo',
        login: 'italo',
        password: '123'
    }

    public static readonly MISSION: any = {
        id: '5d078f2c6fb1b4cde4578892',
        patient_id: '5ca23b9af04e7c28223cb590',
        hour: '1 hora',
        activity: 'sentar',
        details: 'exemplo'
    }

}
