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
  const template = readFile('./index.html')
  res.send(template)
}

module.exports = bootstrap
