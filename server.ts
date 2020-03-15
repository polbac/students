const express = require('express')
const next = require('next')
const makeConnection = require('./connection').makeConnection

const port: Number = parseInt(process.env.PORT as any, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

import ("reflect-metadata")

app.prepare().then(() => {
  const server = express()

  const connection = makeConnection()
  .then(() => {
    console.log(`> DATABASE: Connected succefull 👌`)
  })
  .catch((err: any) => {
    console.log('> DATABASE: can\'t connect 👎', err)
  })

  server.all('*', (req: any, res: any) => {
    req.connection = connection
    return handle(req, res)
  })

  server.listen(port, (err:any) => {
    if (err) throw err
    console.log(`> Students ready on http://localhost:${port}`)
  })
})