import express from "express";
const app = express();
import dotenv from "dotenv";
import routeUser from "./routes/auth.routes.js";
dotenv.config();
import { dbConnect } from "./config/db.js";
app.use(express.json())
app.use("/api/users", routeUser);

app.listen(process.env.PORT, () => {
  console.log(`connected on PORT ${process.env.PORT}`);
  dbConnect();
});
