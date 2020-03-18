import "isomorphic-unfetch"
import getConfig from 'next/config'

class ApiClient {
    get(url, paramaters = {}, withToken = false) {
        if (withToken) {
            paramaters.headers = {
                'Authorization': this.getToken()
            }
        }

        const p = Object.keys(paramaters).map(function(key) {
            return `${key}=${paramaters[key]}`
        }).join('&');

        return fetch(`${this.url(url)}?${p}`)
    }

    post(url, body, withToken = false) {
        if (withToken) {
            paramaters.headers = {
                'Authorization': this.getToken()
            }
        }

        return fetch(this.url(url), {
            method: 'POST',
            body: JSON.stringify(body),
            headers:{
              'Content-Type': 'application/json'
            }
        })
    }

    put(url, body, withToken = false) {
        if (withToken) {
            paramaters.headers = {
                'Authorization': this.getToken()
            }
        }
        
        return fetch(this.url(url), {
            method: 'PUT',
            body: JSON.stringify(body),
            headers:{
              'Content-Type': 'application/json'
            }
        })
    }

    url(endpoint) {
        const config = getConfig()
        console.log('config', config)
        console.log(`${config.publicRuntimeConfig.api}/${endpoint}`)
        return `${config.publicRuntimeConfig.api}/${endpoint}`
    }

    getToken() {
        return localStorage.getItem('token')
    }
}

export default new ApiClient()