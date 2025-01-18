import { useState } from "react";
import { Camera, Mail, User } from "lucide-react";
import { setAuthUser } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
  const dispatch = useDispatch();

  const { authUser } = useSelector((store) => store.user);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    profilePic: "",
  });

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setData({ ...data, profilePic: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (data.profilePic) {
      formData.append("profilePic", data.profilePic); // Add the file if it's available
    }

    try {
      let res = await axios.post(
        "http://localhost:7000/api/users/update",
        formData, // Form data should be sent, not the data object
        {
          headers: {
            "Content-Type": "multipart/form-data", // Proper header for form data
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(setAuthUser(res.data.updatedUser)); // Update with the new user data
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[90%] pt-10">
      <div className="max-w-2xl overflow-hidden mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          {/* profilePic upload section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={
                  authUser?.user?.profilePic ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMI5YxZE03Vnj-s-sth2_JxlPd30Zy7yEGg&s"
                } // Show uploaded image or default image
                alt="Profile"
                className="size-32 rounded-full object-cover border-4 "
              />
              <label
                htmlFor="profilePic-upload"
                className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200`}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="profilePic-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleUpload}
                />
              </label>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <input
                type="text"
                value={data.username} // Use username here instead of fullname
                onChange={(e) =>
                  setData({ ...data, username: e.target.value })
                }
                placeholder="Enter Full Name"
                className="p-2 w-full rounded-lg"
              />
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="Enter Email"
                className="p-2 w-full rounded-lg"
              />
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Password
              </div>
              <input
                type="password"
                value={data.password}
                onChange={(e) =>
                  setData({ ...data, password: e.target.value })
                }
                placeholder="Enter Password"
                className="p-2 w-full rounded-lg"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
