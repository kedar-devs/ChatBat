const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ChatRoomSchema=Schema({
    username:{type:String,required:true}
})
const ChatRoom=mongoose.model('Chatroom',ChatRoomSchema)
module.exports=ChatRoom