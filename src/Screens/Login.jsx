import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import login_img from '../assets/login_img.webp'
import { FaGoogle, FaFacebook, FaAffiliatetheme } from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../index.css'

function Login() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin') {
      setIsLoggedIn(true);
      navigate(`/dashboard`);
    } else {
      setError();
      toast.error('Invalid username or password')
    }
  };

  return (
    <div className='bg-white shadow-sm  align-center justify-center p-3'>
      <div className="flex flex-row">
        <div className="bg-red-50 w-1/2 p-4 justify-center items-center flex">
          <img src={login_img} alt="image login" className='rounded w-full' />
        </div>
        <div className="w-1/2 p-4 items-center">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mr-4">
              <FaAffiliatetheme size={35} className="text-red-400"/>
            </div>
          </div>
          <h1 className="font-semibold text-2xl text-center mt-5">Hello again!</h1>
          <div className="paragraph-wrapper flex justify-center my-5">
            <p className='text-gray-200 w-80 text-center'>Welcome to our application. Please enter the following inputs to continue ..</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col px-20 align-center justify-center">
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email" required
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="my-4 flex flex-col">
              <label htmlFor="password" className="text-gray-700 mb-2 flex items-center">
                <span>Password</span>
                <a href="#" className="text-blue-500 text-sm ml-auto">Forgot password?</a>
              </label>
              <input
                type="password"
                id="password" required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="bg-red-400 text-white px-4 py-3 rounded font-medium mt-4">
              Login
            </button>

            <div className="or-section my-5 flex justify-center">
              <div className="line w-40 h-1 bg-gray-100 mt-2"></div>
              <p className="text-gray-700 px-2 ">or</p>
              <div className="line w-40 h-1 bg-gray-100 mt-2"></div>
            </div>

            <div className="mb-2 flex justify-center">
              <button className="bg-white border border-gray-300 px-4 py-2 rounded mr-2 flex items-center">
                <FaGoogle className="mr-2" /> Login with Google
              </button>

              <button className="bg-white border border-gray-300 px-4 py-2 rounded flex items-center">
                <FaFacebook className="mr-2" /> Login with Facebook
              </button>
            </div>
            <div className="my-4 justify-center items-center flex">
              <p className="text-gray-700 text-md">
                Don't have an account? <a href="/register" className='text-red-400'>Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
