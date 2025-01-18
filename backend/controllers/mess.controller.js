import User from "../modals/user.model.js";
import Message from "../modals/message.model.js";
import streamifier from "streamifier"
import cloudinary from "../config/cloudDb.js"

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find({ _id: { $ne: req.user._id } }).select(
      "-password"
    );
    if (suggestedUsers.length === 0)
      return res.status(404).json({ message: "no user exist" });
    return res.status(200).json({ success: true, users: suggestedUsers });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const senderId = req.user.id;
    const receiverId = req.params.id;

    const message = await Message.find({
      $or: [
        { senderId, receiverId },
        { receiverId, senderId },
      ],
    });

    return res.status(200).json({ message });
  } catch (error) {
    console.log(error);
  }
};

export const sendMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.user.id;
    const {text} = req.body
    const image = req.file

    let cloudResponse;

    if (image) {
      const uploadStream = (buffer) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            (error, result) => {
              if (result) {
                resolve(result);
              } else {
                reject(error);
              }
            }
          );
          streamifier.createReadStream(buffer).pipe(stream);
        });
      };

      cloudResponse = await uploadStream(image.buffer); // Use buffer directly
    }

    const user = await Message({senderId,receiverId,text,image: cloudResponse?.secure_url})

    await user.save()

    return res.status(201).json({success:true ,message: "message send", user });

  } catch (error) {
    console.log(error);
  }
};
