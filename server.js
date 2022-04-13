const express = require('express')
const app = express()


app.use(express.static(__dirname))
app.get('/', (req, res)=>{
   res.sendFile(__dirname+'/index.html') 
})

app.get('/authx.html', (req, res)=>{
    res.sendFile(__dirname+'/authx.html') 
 })
 app.get('/registration.html', (req, res)=>{
    res.sendFile(__dirname+'/registration.html') 
 })

app.listen(3000)