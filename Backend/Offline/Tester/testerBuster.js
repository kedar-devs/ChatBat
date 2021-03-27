const Studs=require('../Offline/model/SubjectModel')
const NewFile=new Studs()
const CreateData=(data)=>{
    const TestData=NewFile.create(data)
    return TestData
}
const gettingALL=()=>{
    const TestData=NewFile.getAll()
    console.log(TestData)
}
const GettingOne=(id)=>{
    const TestData=NewFile.getOne(id)
    console.log(TestData)
}
const PuttingData=(data,id)=>{
    const TestData=NewFile.putData(data,id)
    console.log(TestData)
}

function TesterBuster(data){
    console.log('In here')
    const id=CreateData(data)
    gettingALL()
    GettingOne(id)
    PuttingData({jhat:"Curly",butt:"flat"},id)
}
module.exports = TesterBuster