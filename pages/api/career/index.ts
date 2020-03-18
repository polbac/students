import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import { getConnection } from '../../../connection'
import { HttpMethod } from "../../../models/http"


export default async (req: any, res: any) => {
    const { method } = req

    if (method === HttpMethod.GET) {
        try {        
            const connection = await getConnection()
            const careers = await connection.manager.find('career');
    
            createResponse(res, {
                careers,
            })

        } catch(err) {
            console.log('API :: Career :: Error', err)
            createErrorResponse(res)
        }
    }
    
  
}