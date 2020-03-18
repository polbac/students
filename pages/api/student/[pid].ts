import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import getConnection from '../../../connection'
import { HttpMethod } from "../../../models/http"
import { Student } from "../../../database/entity/Student"


export default async (req: any, res: any) => {

    const { method } = req
    
    const connection = getConnection()
    const repository = await connection.getRepository('student')

    if (method === HttpMethod.PUT) {
        try {
            const { body } = req
            const student = await repository.preload(body);
            const saved = await repository.save(student as Student)

            createResponse(res, {
                saved,
            })
        } catch (err) {
            console.log('API :: Save Student {pid} :: Error', err)
            createErrorResponse(res)
        }
    }

    if (method === HttpMethod.GET) {
        try {        
            const { query: { pid }} = req
            const student = await repository.find({
                    where: [{ id: pid }], 
                    relations: ['career', 'country'] })
        

            createResponse(res, {
                student,
            })
        } catch(err) {
            console.log('API :: Fetch Student {pid} :: Error', err)
            createErrorResponse(res)
        }
    }
}