import { HttpMethod } from "../../../models/http"
import { createNotFoundResponse, createResponse } from "../../../utils/httpBuilderResponse"
import { auth } from "../../../service/auth"

export default async (req: Request, res: Response) => {
    const { method } = req

    if (method === HttpMethod.POST) {
        const email = 'email'
        const password = 'polbac123'
        
        try {
            const valid = await auth(email, password)
            const { token } = valid
            
            createResponse(res, {
                session: {
                    email,
                    token,
                },
            })
        } catch(err) {
            console.log('err', err)
        }
    
    }

    createNotFoundResponse(res);
}