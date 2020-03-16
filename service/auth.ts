import jwt from 'jsonwebtoken'

const secret = 'acamica'

export function valid(token: string) {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, secret)
            resolve()
        } catch(err) {
            reject()
        }
    })
}

export function auth(user: string, password: string): Promise<{ token: string }> {
    return new Promise((resolve) => {
        if (user && password) {
            resolve({
                token: createJWT({ session: 1 })
            })
        }
    })
}

export function createJWT(payload: any) {
    return jwt.sign(payload, 'acamica 🎓');
}