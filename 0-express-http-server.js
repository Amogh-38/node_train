const http = require('http')
const {readFileSync} = require('fs')

const homepage = readFileSync('./navbar-app/index.html')
const homestyles = readFileSync('./navbar-app/styles.css')
const homelogo = readFileSync('./navbar-app/logo.svg')
const homelogic = readFileSync('./navbar-app/browser-app.js')
const server = http.createServer((req, res) => {
    const url = req.url
    console.log(req.url)
    // home page
    if(url === '/') {
        res.writeHead(200, {'content-type' : 'text/html'})//statue code, status messege(optional){}, headers() ex-{'content-type'}
        res.write(homepage)
        res.end()
    }
    // about page
    else if(url === '/about') {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
    // styles
    else if(url === '/styles.css') {
        res.writeHead(200, {'content-type' : 'text/css'})
        res.write(homestyles)
        res.end()
    }
    // logo
    else if(url === '/logo.svg') {
        res.writeHead(200, {'content-type' : 'image/svg+xml'})
        res.write(homelogo)
        res.end()
    }
    // home logic
    else if(url === '/browser-app.js') {
        res.writeHead(200, {'content-type' : 'text/javascript'})
        res.write(homelogic)
        res.end()
    }
    // 404
    else {
        res.writeHead(404, {'content-type' : 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)