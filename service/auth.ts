import jwt from 'jsonwebtoken'
import { getConnection } from '../connection'
import { createNonAuthorizedResponse } from '../utils/httpBuilderResponse';

var md5 = require('md5');

const secret = 'acamica 🎓'

export function valid(token: string) {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, secret)
            resolve()
        } catch(err) {
            reject()
        }
    })
}

export function auth(user: string, password: string): Promise<{ email: string, token: string }> {
    return new Promise(async(resolve, reject) => {
        if (user && password) {
            const connection = await getConnection()
            const findUser: any = await connection.manager.findOne('user', {
                where: [
                    { user, password: md5(password) },
                ]
            });

            if (findUser) {
                resolve({
                    email: findUser.email,
                    token: createJWT({ 
                        expire: getExpiredDate()
                    })
                })
                return
            }

            reject()
        }
    })
}

function getExpiredDate() {
    const now = new Date()
    return now.setTime(now.getTime() + (60*60*1000))
}

export function createJWT(payload: any) {
    return jwt.sign(payload, secret);
}

export function protectRequest(request: any, response: any) {
    const { authorization } = request.headers
    try {
        const ver = jwt.verify(authorization, secret)
        console.log('ver', ver)
    } catch(err) {
        console.log('createNonAuthorizedResponse')
        createNonAuthorizedResponse(response)
    }
    
    

}