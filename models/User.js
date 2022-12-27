import mongoose from "mongoose";

//user schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},{ collection:'train-users-data',timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;