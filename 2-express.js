const express = require('express')
const path = require('path')

const app  = express()

app.use(express.static('./public'))//setup static or middleware
// it stores that files that that server does not need to change, i.e., the backend, logos, css etc
// we can simply dump the index.html file in public as well, coz the browser will automatically engage with it first

/* app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
    adding to static assets
    SSR - server side rendering
}) */

app.all('*', (req, res) => {
    res.send('resource not available')
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})