import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import login_img from '../assets/signup_img.png'
import { FaGoogle, FaFacebook, FaAffiliatetheme } from 'react-icons/fa';
import { toast } from 'react-toastify';
import '../index.css'

function Register() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      navigate(`/dashboard`);
    } else {
      setError('Invalid username or password');
      toast.error("Okay!");
    }
  };

  return (
    <div className='bg-white shadow-sm  align-center justify-center p-3'>
      <div className="flex flex-row">
        <div className="bg-red-50 w-1/2 p-4 justify-center items-center flex h-screen">
          <img src={login_img} alt="image login" className='rounded w-full' />
        </div>
        <div className="w-1/2 p-4 items-center h-screen overflow-y-scroll">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mr-4">
              <FaAffiliatetheme size={35} className="text-red-400" />
            </div>
          </div>

          <h1 className="font-semibold text-xl text-center mt-3">Create an Account!</h1>

          <div className="mt-4 flex justify-center">
            <button className="bg-white border border-gray-300 px-4 py-2 rounded mr-2 flex items-center text-gray-400">
              <FaGoogle className="mr-2 text-red-400" /> Sign up with Google
            </button>

            <button className="bg-white border border-gray-300 px-4 py-2 rounded flex items-center text-gray-400">
              <FaFacebook className="mr-2 text-red-400" /> Sign up with Facebook
            </button>
          </div>

          <div className="or-section my-5 flex justify-center">
            <div className="line w-40 h-1 bg-gray-100 mt-2"></div>
            <p className="text-gray-700 px-2 ">or</p>
            <div className="line w-40 h-1 bg-gray-100 mt-2"></div>
          </div>

          <p className='text-gray-500 text-center'>Fill in all inputs!</p>

          <form onSubmit={handleLogin} className="flex flex-col px-20 align-center justify-center">

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="text-gray-700 mb-2">
                User name
              </label>
              <input
                type="text"
                id="username" required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your username"
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="name" className="text-gray-700 mb-2">
                Full name
              </label>
              <input
                type="text"
                id="name" required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your names"
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="email" className="text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email} required
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your  email"
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="phone" className="text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={phoneNumber} required
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex flex-col mt-3">
              <label htmlFor="password" className="text-gray-700 mb-2 flex items-center">
                <span>Password</span>
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
              Sign Up
            </button>

            <div className="my-4 justify-center items-center flex">
              <p className="text-gray-700 text-md">
                Already have an account? <a href="/login" className='text-red-400'>Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
