import "isomorphic-unfetch"
import getConfig from 'next/config'

const config = getConfig()

class ApiClient {
    get(url, paramaters) {
        console.log(config)
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
        return `${config.publicRuntimeConfig.api}/${endpoint}`
    }
}

export default new ApiClient()