import { HttpStatus } from "../models/http"

export function createNotFoundResponse(res: any, text = 'Page Not Found') {
    res.status(HttpStatus.NOT_FOUND)
        .send({
            success: false,
            text,
        })
}

export function createErrorResponse(res: any, text = 'Internal Server Error') {
    res.status(HttpStatus.ERROR)
        .send({
            success: false,
            text,
        })
}

export function createResponse(res: any, body = {}) {
    res.status(HttpStatus.OK)
        .send({
            success: true,
            body,
        })
}