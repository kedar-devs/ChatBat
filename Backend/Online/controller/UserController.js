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

    nexmo.message.sendSms(from, to, text)
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
        OtpSender(user.mobileno,user.otp)
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
                let payload={subject:FoundUser.mobileno}
                 let token=jwt.sign(payload,process.env.SECRET_KEY)
                 res.status(200).send({token})       
    }
}
