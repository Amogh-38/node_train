const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url ==='/about') {
        res.end('I breathe super hot fire')
    }
    res.end(`<h1>oops!</h1>
    <p> We dont do that here</p>
    <a href = "/"> Back Home</a>`)
})
 
server.listen(3000)