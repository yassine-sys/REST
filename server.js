const express=require('express')
const connect=require('./config/connectDB')
const cors = require('cors')

const app=express()

app.use(express.json())
app.use(cors())


connect()

app.use('/api/user',require('./routes/user'))

app.listen(3000,err=>{
    err? console.log(err) : console.log('server is connected')
})