import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import { getConnection } from '../../../connection'
import { HttpMethod } from "../../../models/http"


export default async (req: any, res: any) => {

    const { method } = req

    if (method === HttpMethod.GET) {
        try {        
            const connection = await getConnection()
            const paymentMethodOptions = await connection.manager.find('PaymentMethodOption');

            createResponse(res, {
                paymentMethodOptions,
            })

        } catch(err) {
            console.log('API :: Country :: Error', err)
            createErrorResponse(res)
        }
    }
}