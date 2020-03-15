import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import getConnection from '../../../connection'


export default async (req, res) => {
    try {        
        const connection = getConnection()
        const careers = await connection.manager.find('career');

        createResponse(res, {
            careers,
        })
    } catch(err) {
        console.log('API :: Career :: Error', err)
        createErrorResponse(res)
    }
  
}