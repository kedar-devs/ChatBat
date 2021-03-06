const mongoose=require('mongoose')
const messageSchema = new mongoose.Schema({
    chatroom: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Chatroom is required!",
      ref: "Chatroom",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: "Chatroom is required!",
      ref: "User",
    },
    message: {
      type: String,
      required: "Message is required!",
    },
    files:{
      type:String
    }
  });
  const Message=mongoose.model("Message",messageSchema)
  module.exports=Message