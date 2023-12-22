import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineDashboard, AiOutlineSetting, AiOutlineLogout, AiOutlineOrderedList, AiOutlineUser, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FaAffiliatetheme } from 'react-icons/fa'

function Sidebar() {
  const pages = [
    { name: "Dashboard", url: "/dashboard", icon: <AiOutlineDashboard size={25} className="mr-2" /> },
    { name: "Product", url: "/product", icon: <AiOutlineUsergroupAdd size={25} className="mr-2" /> },
    { name: "Products", url: "/products", icon: <AiOutlineOrderedList size={25} className="mr-2" /> },
    { name: "Settings", url: "/settings", icon: <AiOutlineSetting size={25} className="mr-2" /> },
    { name: "Logout", url: "/logout", icon: <AiOutlineLogout size={25} className="mr-2" /> }
  ];
  const path = useLocation().pathname;

  return (
    <div className="bg-white w-64 h-screen py-6 border-r-2 border-gray-200">
      <div className="flex px-10">
          <div className="w-10 h-10 rounded-md bg-red-50 mr-4 flex items-center justify-center">
              <FaAffiliatetheme size={25} className="text-red-400"/>
          </div>
          <h1 className='mt-2 font-semibold'>
            {/* CARIO */} APP
            </h1>
      </div>
      <ul className="space-y-3 mt-12">
        {pages.map((data, key) => (
          <li key={key} className="flex items-center">
            <div className={`w-1 h-8 ${ path === data.url ? "bg-red-500":""} mr-2 rounded-full`}></div>
            <NavLink
              exact
              to={`${data.url}`}
              className={`block px-4 py-2 flex items-center ${
                path === data.url ? "text-red-400 font-medium" : "text-black"
              }`}
            >
              {data.icon}
              <span className="ml-2">{data.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
