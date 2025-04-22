const mongoose=require('mongoose');
const {Schema,model}=require('mongoose');

//Schema for login/signup
const userSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true, lowercase: true}, //email validation
    password:{type:String,require:true, 
        minlength: [8, 'Password must be at least 8 characters long.'], // min password length validation
        maxlength: [200, 'Password must be at most 200 characters long.'], //max password length validation
      }
})

const userModel=model('userModel',userSchema);
 
module.exports=userModel;
