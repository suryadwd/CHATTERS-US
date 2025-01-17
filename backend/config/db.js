import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log("Connected to db"))
  .catch(e => console.log(e))
}