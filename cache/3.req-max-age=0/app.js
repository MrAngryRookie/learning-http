var express = require('express')
var app = express()
var boostrap = require('./boostrap')

// app.set('etag', false);
app.set('Pragma', false);


app.get('/api', (req, res) => {
  res.setHeader('Cache-Control', 'max-age=3600')
  res.json(44554893734)
})

app.get('/index', boostrap)


app.listen(7788, '127.0.0.1', function() {
  console.log('listen to 127.0.0.1:7788')
})
