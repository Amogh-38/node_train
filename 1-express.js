const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('user requested the fire')//will get printed in the terminal when user requests the page
    res.status(200).send('super hot fire')
})

app.get('/about', (req, res) => {
    res.status(200).send('super about')
})

app.all('*', (req, res) =>  {
    res.status(404).send('resource not found')// express has default '404' pages that it displays when the requested page is not available
})

app.listen(5000, () => {
    console.log('super 5000')
})

/* 
app.get
app.post
app.put
app.delete
app.all
app.use
app.listen */