import React from "react";
import LoginImg from "../img/LoginImg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <div className="p-8 flex">
        <div className="w-1/2 bg-slate-50 border-2 border-red-600">
          <div className="font-extrabold text-indigo-700 ml-6 mt-6 ">LOGO</div>
          <div className="flex justify-center mt-16">
            <img src={LoginImg} className="h-90 w-90" alt="Login" />
          </div>
        </div>

        <div className="w-1/2 bg-slate-50 border-2 border-red-600 p-4">
          <div className="flex flex-row pt-2 border-2 border-red-600 pb-2 justify-evenly text-indigo-700 font-medium">
            <h3 className="hover:bg-blue-950 hover:text-white py-2 px-4 rounded-md">Home</h3>
            <h3 className="hover:bg-blue-950 hover:text-white py-2 px-4 rounded-md">  About Us</h3>

            <h3 className="hover:bg-blue-950 hover:text-white py-2 px-4 rounded-md">Login</h3>
            <h3 className="hover:bg-blue-950 hover:text-white py-2 px-4 rounded-md">Contact Us</h3>
          </div>

          <div className="p-12">
            <h1 className="mt-4 text-2xl font-bold flex justify-center text-blue-950 ">
              USER LOGIN
            </h1>

            <div className="p-12">
              <div className="mt-4">
                <div className="mb-4 relative">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full  border-2 border-gray-300 rounded-md  p-2 pl-10 text-indigo-700"
                  />
                  <span className="absolute top-2 left-2"><FontAwesomeIcon icon={faUser} className="text-blue-950"/></span>
                </div>

                <div className="mb-4 relative">
                  
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full  border-2 border-gray-300 rounded-md p-2 pl-10 text-indigo-700" // Adjusted margin-left to ml-2
                  />
                  <span className="absolute top-2 left-2"><LockIcon className="text-blue-950"/></span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember" className="ml-2">
                      Remember
                    </label>
                  </span>

                  <span>Forgot Password ?</span>
                </div>

                <div className="flex w-full justify-center">
                  <button
                    type="button"
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-md justify-center font-extrabold"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
