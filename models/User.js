const mongoose=require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email:{
    type:String,
    require:true,
   },
  password:{
    type:String,
    require:true,
   }
})

module.exports=mongoose.model('user',userSchema)