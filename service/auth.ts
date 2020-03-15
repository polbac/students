import jwt from 'jsonwebtoken'

export function valid(token: string) {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token)
            resolve()
        } catch(err) {
            reject()
        }
    })
}

export function auth(user: string, password: string) {
    return new Promise((resolve, reject) => {
        resolve({
            token: createJWT({ session: 1 })
        })
    })
}

export function createJWT(payload: any) {
    return jwt.sign(payload, 'acamica 🎓');
}