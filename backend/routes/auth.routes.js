import express from "express"
import { login, logout, signup, update } from "../controllers/auth.controoler.js"
import {protect} from "../middleware/protectedRoute.js"
import upload from "../middleware/multer.js"
const router = express.Router()

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.post("/update",protect,upload.single('profilePic'),update)


export default router