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
    res.status(200).send({userId})
})
router.put('/addAssignment',(req,res)=>{
    Subject.putAssignment(req.body)
})

module.exports=router