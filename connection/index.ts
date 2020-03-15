import { createConnection, ConnectionOptions, Connection } from 'typeorm'
import { Country } from '../database/entity/Country'
import { Career } from '../database/entity/Career'
import ("reflect-metadata")

require('dotenv').config()

export function makeConnection(): Promise<Connection> {
    return new Promise(async (resolve, reject) => {
        try {
            (global as any).connection = await createConnection({
                type: process.env.DB_TYPE,
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                entities: [ Country, Career ],
            } as ConnectionOptions)
            resolve()
        } catch(err) {
            reject(err)
        }
    })
}

export default () => (global as any).connection as Connection