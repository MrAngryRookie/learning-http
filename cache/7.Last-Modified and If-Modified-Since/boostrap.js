var fs = require('fs')
var path = require('path')

function getFilePath(relativePath) {
  return path.join(process.cwd(), relativePath)
}

function readFile(relativePath) {
  const filePath = getFilePath(relativePath)
  return fs.readFileSync(filePath, 'utf8')
}

function bootstrap(req, res) {
  var standard = new Date('2017-09-27 17:44:10') //在这个时间段之前都是304,过了之后就变成200
  var result = Math.max(standard.getTime(), Date.now())
  res.setHeader('Last-Modified', new Date(result))
  
  var template = readFile('./index.html')
  res.send(template)
}

module.exports = bootstrap
