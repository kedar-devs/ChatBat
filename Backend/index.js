const express=require('express')
const app=express()
const path=require('path')
const studentRouter=require('./Offline/routes/subjectRoute')
const Tester=require('./Tester/testerBuster')
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.static(path.join(__dirname, '/data/')))
app.use('/api',studentRouter)
Tester({sname:"TE-Comp",notes:[],links:[],assignment:[]})
app.listen(5000,()=>{
    console.log('Port is Listenning')
})