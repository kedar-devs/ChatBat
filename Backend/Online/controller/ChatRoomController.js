const ChatRoom=require('./../models/ChatRoom.model')
exports.creatchatRoom=async(req,res)=>{
    const {name}=req.body
    const nameRegex=/^[A-Za-z\s]+$/
    if(!nameRegex.test(name)) throw 'Name not valid ps enter a correct name'
    const chatroomExists=await ChatRoom.findOne({name})
    if(chatroomExists) throw 'chat Room exists pls try something else'
    const chatroom=new ChatRoom({name})
    await chatroom.save()
    res.status(200).send({message:'chatroom is on Air'})
}