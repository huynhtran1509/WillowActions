var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.get('/webhook', function (req, res) {
  console.log('Webhook Received')
})

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})