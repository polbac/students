import "isomorphic-unfetch"

class ApiClient {
    get(url, paramaters) {
        return fetch(this.url(url), paramaters)
    }

    post(url, body) {
        return fetch(this.url(url), {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
              'Content-Type': 'application/json'
            }
        })
    }

    url(endpoint) {
        return `http://localhost:3000/api/${endpoint}`
    }
}

export default new ApiClient()