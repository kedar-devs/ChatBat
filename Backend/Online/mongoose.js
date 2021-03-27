const mongoose=require("mongoose")
require('dotenv').config()
const uri=process.env.MONGODB_URL

mngoose.connect(uri, {
    useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
})
mongoose.connection.once("open", ()=>{
    console.log("Connection Established sucessfully")
    
})