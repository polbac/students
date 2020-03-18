import { Like } from 'typeorm'
import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import getConnection from '../../../connection'
import { HttpMethod } from "../../../models/http"


export default async (req: any, res: any) => {

    const { method, query: { name, email, career, country } } = req

    if (method === HttpMethod.GET) {
        try {        
            const connection = getConnection()
            let where: any = {}

            if (email) {
                where.email = Like(`%${email}%`)
            }
            
            if (name) {
                where.name = Like(`%${name}%`)
            }

            if (parseInt(career)) {
                where.career = career
            }

            if (parseInt(country)) {
                where.country = country
            }


            const students = await connection.getRepository('student')
                .find({ 
                    relations: ['career', 'country'],
                    select: ['id', 'name', 'email', 'career', 'country'],
                    where,
                 })

            createResponse(res, {
                students,
            })
        } catch(err) {
            console.log('API :: Country :: Error', err)
            createErrorResponse(res)
        }
    }
}