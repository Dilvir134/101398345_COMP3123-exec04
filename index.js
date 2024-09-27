const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('Hello Express JS!')
})

app.get('/user', (req, res) => {
    res.send({firstname: req.query.firstname || "Pritesh", lastname: req.query.lastname || "Patel"})
})

app.get('/user/:firstname/:lastname', (req, res) => {
    res.send(req.params)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})