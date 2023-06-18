import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Account from '../components/Account';
import DataTable from 'react-data-table-component';

function Settings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleFilter = (e) => {
    const newData = data.filter(row => {
      return row.title.toLowerCase().includes(e.target.value.toLowerCase());
    })

    setRecords(newData);
  }

  const handleAddButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
                <input type="text" onChange={handleFilter} className="border border-gray-100 p-2" placeholder='Search ...' />
                <button onClick={handleAddButtonClick} className="bg-red-400 py-2 px-4 text-white ">+ Add</button>
                {isModalOpen ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-2xl px-6">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-lg font-medium text-center text-red-400">
                              Add New Device
                            </h3>
                          </div>

                          <form onSubmit={handleAddButtonClick}>
                            {/*body*/}
                            <div className="relative px-16 py-6 flex-auto">
                              <div className="mb-4 flex items-center">
                                <label className="w-36">Device Name</label>
                                <input
                                  className="border w-52 p-2"
                                  type="text"
                                  // onChange={(e) => setDeviceName(e.target.value)}
                                  required
                                  placeholder="Enter device name"
                                />
                              </div>
                            </div>

                            {/*footer*/}
                            <div className="flex items-center justify-between px-12 py-3 border-t border-solid border-slate-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleCloseModal}
                              >
                                Close
                              </button>
                              <button
                                className={`bg-red-400 text-white active:bg-red-600 font-medium uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                type="submit"
                              >
                                Save Changes
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
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
