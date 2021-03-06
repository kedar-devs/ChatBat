const User=require('./../models/User.model')
const sha256=require('js-sha256')
var otpGenerator = require('otp-generator')
const Nexmo=require('nexmo')

const nexmo = new Nexmo({
    apiKey: 'a6ed3eea',
    apiSecret: 'm2gEhPVU24h7qm4Z',
  });
const OtpSender=(no,otp)=>{
    const from = 'Vonage APIs';
// const to = '919021932268';
    const to=no
    const text = `OTP CODE:${otp} Valid till 5 min`;

    nexmo.message.sendSms(from, to, text,(err,responseData)=>{
        if (err) {
            console.log(err);
        } else {
            console.log(responseData.messages[0])
            if(responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
                return res.status(200).send('Sucess')
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                return res.status(401).send(`Message failed with error: ${responseData.messages[0]['error-text']}`)
            }
    }
})
    
}
exports.register=async(req,res)=>{
    if(req.body){
        res.send('Empty body not Allowed')
    }
    console.log(req.body)
   
    const {username,mobileno,password,email} = req.body
    const ExistingUser=await User.find({mobileno})
    if(ExistingUser) throw 'You Cannot Register Twice Champ'
    const emailRegex=/@gmail.com|@yahoo.com|hotmail.com|@numadic.com/
    const NumberRegex=/^\+[0-9]{2,3}-[0-9]\d{10}/
    const PasswordRegex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    
    if(!emailRegex.test(email) || email==null) throw 'Email id is not supported, try gmail,yahoo or hotmail.com'
    if(!NumberRegex.test(mobileno) || mobileno.length>10) throw 'Number Provided is InValid'
    if(password.length<8) throw 'Password Provided is too short, password should be atleast 8 characters long'
    if(!PasswordRegex.test(password)) throw 'Password Provided is not Strong Enough pls re-Enter Your Password'
    const otp=otpGenerator.generate(5, { upperCase: false, specialChars: false });
    const user=new User({username,
        mobileno,
        password:sha256(password+process.env.SALT),
        otp,
        email})
        await OtpSender(user.mobileno,user.otp)
        await user.save()
        res.status(200).send("VALIDATION WILL BE DONE SHORTLY")

}
exports.validator=async(req,res)=>{
    if(!req.body){
        res.send('OTP not Entered')
    }
    const FoundUser=await User.findOne({otp:req.body.otp})
    if(!FoundUser){
        res.send('No User Found')
    }
    else{
                let payload={id:user._id}
                 let token=jwt.sign(payload,process.env.SECRET_KEY)
                 res.status(200).send({token})       
    }
}
exports.login=async(req,res)=>{
    const {mobileno,password} = req.body
    const user=await User.findOne({mobileno,password:sha256(password+process.env.SALT)})
    if(!user) throw 'No User was found with those Credentials'
    else{
        let payload={id:user._id}
                 let token=jwt.sign(payload,process.env.SECRET_KEY)
                 res.status(200).send({token})
    }
    
}

exports.getAll=async(req,res)=>{
    const user=await User.find()
    res.status(200).send({user})
}
exports.getOne=async(req,res)=>{
    const user=await User.findOne({_id:req.params.id})
    res.status(200).send({user})
}