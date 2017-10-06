var express = require('express')

var app = express()


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next();
})

app.put('/api', (req, res) => {
  res.json('puttttt')
})


app.listen(3344, '127.0.0.1', function() {
  console.log('listen to 127.0.0.1:3344')
})
