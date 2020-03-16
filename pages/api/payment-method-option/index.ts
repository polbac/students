import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import getConnection from '../../../connection'


export default async (req, res) => {
    try {        
        const connection = getConnection()
        const paymentMethodOptions = await connection.manager.find('PaymentMethodOption');

        createResponse(res, {
            paymentMethodOptions,
        })
    } catch(err) {
        console.log('API :: Country :: Error', err)
        createErrorResponse(res)
    }
  
}