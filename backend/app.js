import express from "express";
const app = express();
import cors from "cors"
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import routeUser from "./routes/auth.routes.js";
import routeMessage from "./routes/mess.routes.js"
dotenv.config();
import { dbConnect } from "./config/db.js";
import cloudinary from "./config/cloudDb.js";
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

const corsOption = {
  origin:"http://localhost:5173",
  credentials:true
}

app.use(cors(corsOption));

app.use("/api/users", routeUser);
app.use("/api/message", routeMessage);


app.listen(process.env.PORT, () => {
  console.log(`connected on PORT ${process.env.PORT}`);
  dbConnect();
  cloudinary
});
