import dotenv from "dotenv"
dotenv.config()
import User from "../modals/user.model.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwtToken;

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (!payload)
      return res
        .status(400)
        .json({ success: false, message: "No token found" });

    const userId = payload.id;

    const user = await User.findById(userId).select("-password");

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
  }
};
