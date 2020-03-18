import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import { getConnection } from '../../../connection'
import { HttpMethod } from "../../../models/http"


export default async (req: any, res: any) => {
    const { method } = req

    if (method === HttpMethod.GET) {
     
        try {        
            const connection = await getConnection()
            const countries = await connection.manager.find('country');

            createResponse(res, {
                countries,
            })

        } catch(err) {
            console.log('API :: Country :: Error', err)
            createErrorResponse(res)
        }
    }
  
}