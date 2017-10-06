var express = require('express')

var app = express()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5566");
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next();
})

app.get('/api', (req, res) => {
  res.json(4455)
})

app.listen(3344, '127.0.0.1', function() {
  console.log('listen to 127.0.0.1:3344')
})
