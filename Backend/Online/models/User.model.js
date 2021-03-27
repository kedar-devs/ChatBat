const mongoose=require('mongoose')
const Schema = mongoose.Schema
const UserSchema =Schema({
    username:{type:String,required:true},
    mobileno:{type:String, required:true},
    password:{type:String, required:true},
    otp:{type:String},
    otpExp:{ type: Date,
        default: Date.now,
        expires: 3600},
    email:{type:String}
},{
    timestamps:true
})
const User=mongoose.model('User',UserSchema)
module.exports=User