import { HttpMethod } from "../../../models/http"
import { createNotFoundResponse } from "../../../utils/httpBuilderResponse";
import { valid } from "../../../service/auth";

export default async (req: Request, res: Response) => {
    const { method } = req

    if (method === HttpMethod.POST) {
        const token = 'aaa'
        try {
            await valid(token)
            return
        } catch (err) {
            createNotFoundResponse(res, 'Invalid Token')
            console.log('api :: refresh :: invalid token', token)
        }
        
    }

    createNotFoundResponse(res);
}