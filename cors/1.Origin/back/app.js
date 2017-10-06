var express = require('express')

var app = express()


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
})

app.get('/api', (req, res) => {
  res.json(4455)
})


app.listen(3344, '127.0.0.1', function() {
  console.log('listen to 127.0.0.1:3344')
})
