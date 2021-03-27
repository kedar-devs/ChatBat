const express=require('express')
const app = express()
const fileupload=require('express-fileupload')
const userRoute=require('./routes/user.route.js')
app.use(fileupload())

app.use('/user',userRoute)

