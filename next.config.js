const path = require('path')

const env = process.env.NODE_ENV || 'development'

require('dotenv').config({
  path: path.join(__dirname, `.env.${env}`),
  systemvars: true
})

module.exports = {
    serverRuntimeConfig: {
      api: process.env.API_URL
    },
    publicRuntimeConfig: {
      api: process.env.API_URL
    },
  }