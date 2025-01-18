// import { useState } from "react";
// import toast from "react-hot-toast";
// import {
//   Eye,
//   EyeOff,
//   Loader2,
//   Lock,
//   Mail,
//   MessageSquare,
//   User,
// } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { setAuthUser } from "../redux/userSlice";
// const Signup = () => {
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//     username: "",
//   });

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [view, setView] = useState(false);

//   const handelOnSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       let res = await axios.post(
//         "http://localhost:7000/api/users/signup",
//         data,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         navigate("/");
//         toast.success(res.data.message);
//         dispatch(setAuthUser(res.data));
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     setUser({
//       username: "",
//       fullName: "",
//       password: "",
//       gender: "",
//     });
//   };

//   return (
//     <div className="min-h-screen grid lg:grid-cols-2">
//       {/* left side */}
//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* LOGO */}
//           <div className="text-center mb-8">
//             <div className="flex flex-col items-center gap-2 group">
//               <div
//                 className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
//               group-hover:bg-primary/20 transition-colors"
//               >
//                 <MessageSquare className="size-6 text-primary" />
//               </div>
//               <h1 className="text-2xl font-bold mt-2">Create Account</h1>
//               <p className="text-base-content/60">
//                 Get started with your free account
//               </p>
//             </div>
//           </div>

//           <form onSubmit={handelOnSubmit} className="space-y-6">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Full Name</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="size-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="text"
//                   value={data.username}
//                   onChange={(e) =>
//                     setData({ ...data, username: e.target.value })
//                   }
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="Enter Username"
//                 />
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Email</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="size-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="email"
//                   value={data.email}
//                   onChange={(e) => setData({ ...data, email: e.target.value })}
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="Enter email"
//                 />
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Password</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="size-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type={!view ? "password" : "text"}
//                   value={data.password}
//                   onChange={(e) =>
//                     setData({ ...data, password: e.target.value })
//                   }
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="Enter password"
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={(e) => setView(!view)}
//                 >
//                   {!view ? (
//                     <EyeOff className="size-5 text-base-content/40" />
//                   ) : (
//                     <Eye className="size-5 text-base-content/40" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <button type="submit" className="btn btn-primary w-full">
//               Create Account
//             </button>
//           </form>

//           <div className="text-center">
//             <p className="text-base-content/60">
//               Already have an account?{" "}
//               <Link to="/login" className=" link-primary">
//                 Login
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* right side */}

//                   {/* <div className="h-86 w-86 border-2 border-gray-300" >
//                     <video className="h-96 w-auto" src="v2.mp4"></video>
//                   </div> */}

// <div className=" border-gray-300">
//   <video className="h-96 w-auto" src="v2.mp4" controls></video>
// </div>


//     </div>
//   );
// };
// export default Signup;

import { useState } from "react";
import toast from "react-hot-toast";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAuthUser } from "../redux/userSlice";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [view, setView] = useState(false);

  const handelOnSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post(
        "http://localhost:7000/api/users/signup",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
        dispatch(setAuthUser(res.data));
      }
    } catch (error) {
      console.log(error);
    }

    setData({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors"
              >
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">
                Get started with your free account
              </p>
            </div>
          </div>

          <form onSubmit={handelOnSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  value={data.username}
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                  className={`input input-bordered w-full pl-10`}
                  placeholder="Enter Username"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={!view ? "password" : "text"}
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className={`input input-bordered w-full pl-10`}
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={(e) => setView(!view)}
                >
                  {!view ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Create Account
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex items-center justify-center bg-gray-100">
        {/* <video
          className="h-full w-full object-cover"
          src="v2.mp4"
          muted
          autoPlay
          loop
        ></video> */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to World</h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;

