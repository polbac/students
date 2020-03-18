import { createResponse, createErrorResponse } from "../../../utils/httpBuilderResponse"
import { getConnection } from '../../../connection'
import { PaymentMethodSchema } from '../../../schemas/paymentMethod'


export default async (req: any, res: any) => {
    const student = req.body

    try {
        const validation = await PaymentMethodSchema.isValid(student)
    
        if (validation) {
            const connection = await getConnection()
            connection.manager.insert('student', student)

            createResponse(res, {
                success: true,
            })
            
        }   

        createErrorResponse(res, 'fieldErrors')
        
    } catch(err) {
        console.log('API :: New Student :: Error', err)
        createErrorResponse(res, 'serverError')
    }
  
}