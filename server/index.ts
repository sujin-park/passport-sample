import express from 'express';
import config from './config'

const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use('*', (_:any, res:any, next:any) => {
  res.setHeader('Expires', '-1')
  res.setHeader('Cache-Control', 'must-revalidate, private')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, X-AUTHENTICATION, X-IP, Content-Type, Accept'
  )

  next()
})

app.use('/', routes)

app.listen(config.port, () => console.log(`Express server listening at ${config.port}`))
   .on('error', err => console.error(err));

module.exports = app
