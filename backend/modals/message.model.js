import mongoose, { Types } from "mongoose"

const messSchema = new mongoose.Schema({

  senderId :{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },

  receiverId :{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },

  text:{
    type:String
  },

  image:{
    type:String
  }

},{timestamps:true})

const Message = mongoose.model("Message",messSchema);
export default Message