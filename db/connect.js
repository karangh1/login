const mongoose=require('mongoose')
const uri="mongodb+srv://karan:karan143@cluster0.65ry3nx.mongodb.net/User?retryWrites=true&w=majority"

const connect=()=>{
   mongoose.connect(uri,()=>{
    console.log("Connected to database.....")
   })
}

module.exports=connect