import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import getConnection from '../../../connection'
import { HttpMethod } from "../../../models/http"


export default async (req: any, res: any) => {

    const { method } = req

    if (method === HttpMethod.GET) {
        try {        
            const connection = getConnection()
            const students = await connection.getRepository('student')
                .find({ 
                    relations: ['career', 'country'],
                    select: ['id', 'name', 'email', 'career', 'country'] })

            createResponse(res, {
                students,
            })
        } catch(err) {
            console.log('API :: Country :: Error', err)
            createErrorResponse(res)
        }
    }
}