const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(require('cors')())
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.json({ message: 'Ok' })
})

app.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const comics = req.body.comics

  require('./modules/mailer')(email, name, comics)
    .then(response => res.json(response))
    .catch(error => res.json(error))
})

const server = http.createServer(app)
server.listen(3030)
console.log('Running on 3030...')
