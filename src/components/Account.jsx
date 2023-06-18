import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { FaEdit } from 'react-icons/fa';
import profile from '../assets/profile.jpeg'

function Account() {

   return (
      <div className="bg-white h-screen border-l-2 border-gray-200 px-5 py-8 w-full">
         <div className='flex justify-between py-8 space-x-4'>
            <div><p className='font-medium'>Logout</p></div>
            <div><FiLogOut className='text-red-400' size={20} /></div>
         </div>
         <div className="flex justify-center relative border-2 border-red-200 w-50 h-50 py-7 rounded-full border-dashed">
            <FaEdit className="text-gray-500 absolute bottom-0 right-0 text-end text-red-500 bg-red-100 py-3 rounded-full" size={45} />
            <div className="w-28 h-28 rounded-full overflow-hidden">
               <img src={profile} alt="Profile" className="w-full h-full object-cover" />
            </div>
         </div>
         <p className="text-center text-lg mt font-semibold mt-2">John Doe</p>
         <p className="text-gray-400 text-center">User</p>
      </div>
   );
}

export default Account;