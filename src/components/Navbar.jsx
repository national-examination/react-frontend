import React from 'react';
import { useLocation } from 'react-router-dom';

function getPageName(path) {
   const formattedPath = path.startsWith('/') ? path.substring(1) : path;
   const segments = formattedPath.split('/');
   const pageName = segments[segments.length - 1];
   return pageName.charAt(0).toUpperCase() + pageName.slice(1);
}

function Navbar() {

   const currentDate = new Date();
   const options = {
     year: 'numeric',
     month: 'short',
     day: 'numeric',
     weekday: 'long'
   };
   const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

   const path = getPageName(useLocation().pathname);
   return (
      <div className="flex flew-row justify-between py-10">
         <div className=""><h2>{path}</h2></div>
         <div className="">{formattedDate}</div>
      </div>
   );
}

export default Navbar;
