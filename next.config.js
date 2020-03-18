const env = process.env.NODE_ENV || 'development'
const envConfig = require('./.env.' + env + '.json')

console.log ('Building with env: ', env)

console.log ('Building with config: ', envConfig)

module.exports = {
    serverRuntimeConfig: {
      api: envConfig.api_url
    },
    publicRuntimeConfig: {
      api: envConfig.api_url
    },
  }