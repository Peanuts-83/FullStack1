const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(express.static('front/build'))

app.get('/api/test', (req,res) => {
    console.log('Test successfull!')
    res.send({
        msg: 'Hello world!'
    })
})

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
})