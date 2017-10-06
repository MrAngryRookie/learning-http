var express = require('express')
var boostrap = require ('./boostrap')

const app = express()

app.use(boostrap)

app.listen(5566, '127.0.0.1', function() {
  console.log('listen to 127.0.0.1:5566')
})
