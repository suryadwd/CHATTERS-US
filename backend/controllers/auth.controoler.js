import bcrypt from "bcryptjs";
import User from "../modals/user.model.js";
import { genTokenSetCookies } from "../middleware/genTokCook.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ success: false, message: "Password greater then 6 digit" });

    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res
        .status(400)
        .json({ success: false, message: "User already registerd" });

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = await User({
      name,
      email,
      password: hashPass,
    });

    await newUser.save();

    const payload = { id: newUser._id };

    genTokenSetCookies(payload, res);

    return res.status(201).json({ success: true, message: "User created" });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ success: true, message: "All fields are required" });

    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User not found" });

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch)
      return res
        .status(400)
        .json({ success: false, message: "password invalid" });

    const payload = user._id;

    genTokenSetCookies(payload, res);

    return res.status(201).json({ success: true, message: "Logged In", user });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    res
      .cookie("jwt", "", { maxAge: 0 })
      .status(200)
      .json({ success: true, message: "User logged Out" });
  } catch (error) {
    console.log(error);
  }
};

