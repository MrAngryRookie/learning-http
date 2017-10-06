var express = require('express')

var app = express()


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5566");
  res.setHeader('Access-Control-Allow-Credentials', true)
  next();
})

app.get('/api', (req, res) => {
  res.cookie('haha', '222')  //  有了credentials才能使得cookie生效
  res.json(4455)
})

app.listen(3344, '127.0.0.1', function() {
  console.log('listen to 127.0.0.1:3344')
})
