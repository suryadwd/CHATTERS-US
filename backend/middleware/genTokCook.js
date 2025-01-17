import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const genTokenSetCookies = async (payload, res) => {

  const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'5d'})

  res.cookie("jwtToken",token,{maxAge:5*24*60*60*1000})

}
