const UserController=require('./../controller/UserController')
const router=require('express').Router()
router.post('/userRegister',UserController.register)
router.post('/userValidator',UserController.validator)
router.post('/userLogin',UserController.login)
router.get('/getAll',UserController.getAll)
router.get('/getOne/:id',UserController.getOne)
module.exports=router