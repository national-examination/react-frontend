import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Account from '../components/Account';
import welcome from '../assets/welcome.png';

function Dashboard() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn)
    if (!isLoggedIn) navigate("/login")
  })

  return (
  <div className="flex">
    <Sidebar />
    <div className="flex-grow bg-gray-50">
      <div className="flex flex-row justify-between">
        <div className="px-10 w-4/5">
          <Navbar />
          <div>
            <div className="bg-red-100 px-20 py-5 mt-4 w-full rounded-md flex flew-row justify-between">
              <div className='w-1/2'>
                <h1 className="text-red-400 py-5 text-xl font-medium">Welcome back Anna!</h1>
                <p className="text-gray-600 pb-10">We hope our system is helping you in your everyday life!</p>
              </div>
              <div className='w-1/2 relative pl-8'>
                <img src={welcome} alt="welcome" className="absolute bottom-0 w-4/6 " />
              </div>
            </div>
            <h1>Welcome to the Dashboard</h1>
          </div>
        </div>
        <div className=" w-1/5">
          <Account />
        </div>
      </div>
    </div>
  </div>);
}

export default Dashboard;
