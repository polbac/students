const express = require('express')
const next = require('next')

const port: Number = parseInt(process.env.PORT as any, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

import ("reflect-metadata")

app.prepare().then(() => {
  const server = express()

  server.all('*', (req: any, res: any) => {
    return handle(req, res)
  })

  server.listen(port, (err:any) => {
    if (err) throw err
    console.log(`> Students ready on http://localhost:${port}`)
  })
})

export default undefined