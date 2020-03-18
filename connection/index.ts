import { createConnection, ConnectionOptions, Connection } from 'typeorm'
import { Country } from '../database/entity/Country'
import { Career } from '../database/entity/Career'
import { PaymentMethodOption } from '../database/entity/PaymentMethodOption'
import { Student } from '../database/entity/Student'
import { User } from '../database/entity/User'

import ("reflect-metadata")

const ormConfig = require('../ormconfig.json')

export function makeConnection(): Promise<Connection> {
    return new Promise(async (resolve, reject) => {
        try {
            (global as any).connection = await createConnection({
                type: ormConfig.type,
                host: ormConfig.host,
                port: ormConfig.port,
                username: ormConfig.username,
                password: ormConfig.password,
                database: ormConfig.database,
                entities: [ Country, Career, Student, PaymentMethodOption, User ],
            } as ConnectionOptions)
            resolve()
        } catch(err) {
            reject(err)
        }
    })
}

export default () => (global as any).connection as Connection