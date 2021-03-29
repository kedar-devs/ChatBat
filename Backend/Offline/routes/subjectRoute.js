const express=require('express')
const router=express.Router()
const Subject=require('./../model/SubjectModel')

router.post('/create',(req,res)=>{
    const newSub={
        sname:req.body.sname,
        date:new Date(),
        grades:[],
        expectedGrade:0,
        assignment:[{Aname:'',
        Aid:new Date().getTime().toString(),
        location:''}],
        link:[{link:'',
        type:''
    }],
    notes:[{loc:'',NId:new Date().getTime().toString(),fname:''}]
    }
    const userId=Subject.create(newSub)
    return res.status(200).send({userId})
})
router.put('/addAssignment',(req,res)=>{
    Subject.putAssignment(req.body)
    return res.status(200).send('Sucess')
})
router.put('/addNotes',(req,res)=>
{
    Subject.putNotes(req.body)
    return res.status(200).send('Sucess')
})
router.put('/addLink',(req,res)=>{
    Subject.putLink(req.body)
    return res.status(200).send('Sucess')
})
router.put('/addGrades',(req,res)=>{
    Subject.putGrades(req.body)
    return res.send('Sucess')
})
router.put('/expect',(req,res)=>{
    Subject.expect(req.body)
    return res.status(200).send('Sucess')
})
module.exports=router