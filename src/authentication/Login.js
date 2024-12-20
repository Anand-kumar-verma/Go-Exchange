
import { Key, Person } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  // const initialValue = {
  //   email: "",
  //   password: ""
  // }
  // const fk = useFormik({
  //   initialValues: initialValue,
  //   enableReinitialize: true,

  //   onSubmit: () => {
  //     const reqbody = {
  //       email: fk.values.email,
  //       password: fk.values.password
  //     }
  //     LoginFn(reqbody)
  //   }
  // })
  // const LoginFn = async (reqbody) => {
  //   try {
  //     const response = await axios.post(endpoint?.login_api, reqbody, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     })
  //     toast(response?.data?.msg, {id:1});
  //     if (response?.data?.msg === "Login SuccessFully.") {
  //       localStorage.setItem("token", response?.data?.token);
  //       localStorage.setItem("ID" , response?.data?.user?.id)
  //       localStorage.setItem("name" , response?.data?.user?.username)
  //       navigate('/dashboard')
  //       window.location.reload();
  //     }
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen 
            bg-gradient-to-b from-[#000000] via-[#3b2d0a] to-[#FFC629] ">
        <img   src="https://sitethemedata.com/sitethemes/goexch9.com/front/logo.png"  className="w-36" alt=""/>

      <div className="w-full max-w-sm mx-2 mt-2 p-4  bg-white rounded  shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Login</h2>
        <div className="mb-4 flex items-center">
          <input
            type="email"
            id="email"
            placeholder="UserName"
            // value={fk.values.email}
            // onChange={fk.handleChange}
            className="w-full p-2 border border-gray-300  
              focus:outline-none focus:ring-2 focus:ring-[#000000] transition 
              duration-300 ease-in-out transform hover:scale-105"
            required
          />
          <p className="border  bg-gray-300 border-gray-300 p-2"><Person/></p>
        </div>
        <div className="mb-6 flex items-center">
          <input
            type="password"
            id="password"
            placeholder="Password"
            // value={fk.values.password}
            // onChange={fk.handleChange}
            className="w-full p-2  border border-gray-300  
              focus:outline-none focus:ring-2 focus:ring-[#000000] transition 
              duration-300 ease-in-out transform hover:scale-105"
            required
          />
          <p className="border bg-gray-300 border-gray-300 p-2"><Key/></p>

        </div>
        <button
          // onClick={() => fk.handleSubmit()}
          className="w-full py-3 bg-[#000000] text-white font-semibold  
            hover:bg-[#222121] focus:outline-none focus:ring-2 focus:ring-[#222121] 
            transition duration-300 ease-in-out transform hover:scale-105"
        >
          LogIn
        </button>
        <button
                 onClick={() => navigate('/dashboard')}

          className="w-full py-3 mt-2  bg-[#000000] text-white font-semibold  
            hover:bg-[#222121] focus:outline-none focus:ring-2 focus:ring-[#222121] 
            transition duration-300 ease-in-out transform hover:scale-105"
        >
          LogIn With Demo ID
        </button>

        <div className="mt-2 text-center">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <span
              className="text-[#000000] cursor-pointer hover:underline"
              
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
