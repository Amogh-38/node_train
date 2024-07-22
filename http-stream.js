var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
      /* const text = fs.readFileSync('./contents/big.txt', 'utf8')
      res.end(text) */
    const sup = fs.createReadStream('./contents/big.txt', 'utf8')// instead of 'sup' use 'filestream' for better readability
    
    sup.on('open', () => {
      sup.pipe(res)// when pipe is called on a readable stream, it writes the data in chunks, i.e., the response headers are in chunk format
    })
    sup.on('error', (err) => {
      res.end(err)
    })
  })

.listen(5000) 