import express from "express"
const router = express.Router()
import {protect} from "../middleware/protectedRoute.js"
import { getMessage, getUsers, sendMessage } from "../controllers/mess.controller.js"
import upload from "../middleware/multer.js"
router.post("/users",protect,getUsers)
router.post("/:id",protect,getMessage)
router.post("/send/:id",protect,upload.single('image'),sendMessage)

export default router