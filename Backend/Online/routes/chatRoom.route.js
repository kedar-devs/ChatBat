const router=require('express').Router()
const ChatRoomController=require('./../controller/ChatRoomController')
router.post('/addChatroom',ChatRoomController.creatchatRoom)
module.exports=router