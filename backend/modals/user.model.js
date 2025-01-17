import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  email:{
    type:String,
    require:true,
  },
  username:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
  },
  profilePic:{
    type:String,
    default:""
  },

},{timestamps:true})

const User = mongoose.model("User",userSchema)
export default User