import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import getConnection from '../../../connection'
import { HttpMethod } from "../../../models/http"


export default async (req: any, res: any) => {
    const { method } = req

    if (method === HttpMethod.GET) {
     
        try {        
            const connection = getConnection()
            const countries = await connection.manager.find('country');
            const careers = await connection.manager.find('career');
            const paymentMethodOptions = await connection.manager.find('PaymentMethodOption');

            createResponse(res, {
                countries,
                careers,
                paymentMethodOptions
                
            })
        } catch(err) {
            console.log('API :: Options :: Error', err)
            createErrorResponse(res)
        }
    }
  
}