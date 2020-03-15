import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import getConnection from '../../../connection'


export default async (req, res) => {
    try {        
        const connection = getConnection()
        const countries = await connection.manager.find('country');

        createResponse(res, {
            countries,
        })
    } catch(err) {
        console.log('API :: Country :: Error', err)
        createErrorResponse(res)
    }
  
}