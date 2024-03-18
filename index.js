require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

  app.get('/About', (req, res) => {
    res.send('Hello About')
  })

  app.get('/home', (req, res) => {
    res.send('Hello home!')
  })
  app.get('/hoe', (req, res) => {
    res.send('Hello hoe!')
  })
  
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})