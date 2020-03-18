import { getConnectionManager, createConnection, ConnectionOptions, Connection } from 'typeorm'

import { Country } from '../database/entity/Country'
import { Career } from '../database/entity/Career'
import { PaymentMethodOption } from '../database/entity/PaymentMethodOption'
import { Student } from '../database/entity/Student'
import { User } from '../database/entity/User'

import ("reflect-metadata")

const ormConfig = require('../ormconfig.json')

const CONNECTION_NAME = 'acamica-students'

export function getConnection(): Promise<Connection> {

    let connection: any = (global as any).connection
    const connectionManager = getConnectionManager()

    
    return new Promise(async (resolve) => {
        
        if(connectionManager.has(CONNECTION_NAME)) {
            connection = await connectionManager.get(CONNECTION_NAME)
            
            if (!connection.isConnected) {
                connection = await connection.connect()
            }

            resolve(connection)
            return
        }

        connection = await createConnection({
            name: CONNECTION_NAME,
            type: ormConfig.type,
            host: ormConfig.host,
            port: ormConfig.port,
            username: ormConfig.username,
            password: ormConfig.password,
            database: ormConfig.database,
            entities: [ Country, Career, Student, PaymentMethodOption, User ],
            synchronize: ormConfig.synchronize,
            logging: ormConfig.logging,
        } as ConnectionOptions);

        resolve(connection)
    })
}
