const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("This is from Server1: endpoint 1"))
app.get('/test', (req, res) => res.send("This is from Server1: endpoint 2"))

app.listen(port,'0.0.0.0', ()=>{
    console.log('App is listening on port 3000')
})