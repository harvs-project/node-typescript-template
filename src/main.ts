import { createServer } from 'http'

createServer((req, res) => {
  res.write(`${req.url} agora vai e coda dinamicamente!`)
  res.end()
}).listen(8000)
