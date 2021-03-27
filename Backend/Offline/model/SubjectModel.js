const fs=require('fs')
// const { Module } = require('node:module')
const path=require('path')

class SubjectModel{
    constructor(filename='subjects.json'){
        this.path=`./data/${filename}`
    
        try {
            fs.readdirSync('data')
        } catch (error) {
            fs.mkdirSync('data')
        }
        try {
            fs.accessSync(this.path)
        } catch (error) {
            fs.writeFileSync(this.path,'[]')   
        }

    }
    createId(){
        return new Date().getTime().toString()

    }
    async create(data){
       const totalData=await this.getAll()
       const id=this.createId()
       totalData.push({...data,id})

       await fs.promises.writeFile(this.path,JSON.stringify(totalData,null,2))
       console.log(totalData)
       return id
    }
    async getAll(){
       return JSON.parse(await fs.promises.readFile(this.path))
    }
    async getOne(id){
        const data=await this.getAll()
        return data.find(subjects=>subjects.id===id)
    }
    async getAllAssignment(){


    }
    async putAssignment(data,id){
        const updatedData=await this.getAll()
        const Assid=this.createId()
        // AddAssign.push({...data,Assid})
        for(var i=0;i<updatedData.length;i++){
            if(updatedData[i].id==id)
            {
                if(data.status==true){
                    var getaddress=makeCopy(data)
                    var getuRL=getIPAddresses()
                    data.content=getuRL+getaddress
                    data.Aname=data.files.notes.filename
                }
                else{
                    console.log(data.file)
                    data.content=data.files.notes.address
                    data.Aname=data.files.notes.filename
                }

                updatedData[i].assignmet.push({...data,Assid})

            }
        }
        await fs.promises.writeFile(this.path,JSON.stringify(updatedData))
        const NewData=this.getAll()
        console.log(NewData)

    }
    
    async makeCopy(data){
    
        let sampleFile;
        let uploadPath;
        
        if (!req.files || Object.keys(req.files).length === 0) {
          return res.status(400).send('No files were uploaded.');
        }
        fs.access('./data/Uploads',(err)=>{
            if(err){
                fs.mkdirSync('./data/Uploads')
            }
        })
        sampleFile = req.files.notes;
        // uploadPath=path.join(__dirname+'./../data/Uploads'+sampleFile.name)
        uploadPath='./data/Uploads/'+sampleFile.name
        await sampleFile.mv(uploadPath,function(err) {
            if (err)
            return res.status(500).send(err);
            else
            return uploadPath
        })
    }
    getIPAddresses() {

        var ipAddresses = [];
    
        var interfaces = require('os').networkInterfaces();
        for (var devName in interfaces) {
            var iface = interfaces[devName];
            for (var i = 0; i < iface.length; i++) {
                var alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    ipAddresses.push(alias.address);
                }
            }
        }
        return ipAddresses;
    }
    async putNotes(data,id){
        var updatedData=await this.getAll()
    
        // updatedData=JSON.stringify(updatedData)
        console.log('In putData')
        if(updatedData.length===0){
            console.log('No existing Sub')
        }
        console.log('from putdata',updatedData[0])
        console.log('fron heavens',data)
        for(var i=0;i<updatedData.length;i++){
            if(updatedData[i].id==id)
            {

                console.log('In for Loop some gadbad gadbad')
                if(data.status==true){
                    var getaddress=makeCopy(data)
                    var getuRL=getIPAddresses()
                    data.link=getuRL+getaddress
                    data.filename=data.files.notes.filename
                }
                else{
                    console.log(data.file)
                    data.link=data.files.notes.address
                    data.filename=data.files.notes.filename
                }
                updatedData[i].notes.push({...data})
                console.log(updatedData[i])
                break;
            }
        }
        // // updatedData=JSON.parse(updatedData)
        await fs.promises.writeFile(this.path,JSON.stringify(updatedData))
        const Newdata=this.getAll()
        console.log(Newdata)
    }

}
module.exports=SubjectModel