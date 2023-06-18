import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Account from '../components/Account';
import DataTable from 'react-data-table-component';

function Settings() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn)
    if (!isLoggedIn) navigate("/login")
  })

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true
    },
    {
      name: 'Year',
      selector: row => row.year,
      sortable: true
    },
  ];
  
  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ];

  const [records, setRecords] = useState(data);

  // const [records, setRecords] = useState(data);
  

  const handleFilter = (e) => {
    const newData = data.filter(row => {
      return row.title.toLowerCase().includes(e.target.value.toLowerCase());
    })

    setRecords(newData);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-gray-50">
        <div className="flex flex-row justify-between">
          <div className="px-10 w-4/5">
            <Navbar />
            <div>
              <h1 className="py-3 text-red-400 font-medium">All Settings</h1>
              <div className='my-3 flex flew-row justify-between'>
                <input type="text" onChange={handleFilter} className="border border-gray-100 p-2" placeholder='Search ...'/>
                <button className="bg-red-400 py-2 px-4 text-white ">+ Add</button>
              </div>
              <DataTable columns={columns} data={records} selectableRows fixedHeader pagination />
            </div>
          </div>
          <div className=" w-1/5">
            <Account />
          </div>
        </div>
      </div>
    </div>);
}

export default Settings;
