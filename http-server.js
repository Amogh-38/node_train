const http = require('http')

const server = http.createServer((req, res) => {
    console.log("user hit the server") // everytime the user refreshes the page, they are requesting the web page once more,
    // so, whenever user requests the page in port 3000, we will get notified by this console.log in our terminal
    res.end("home page")
})

server.listen(3000) // port no 1-1024 are reserverd by your system to perform specific system services and protocols