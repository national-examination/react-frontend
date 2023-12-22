import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Account from '../components/Account';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import DeleteModal from '../components/DeleteModal';
import UpdateModal from '../components/UpdateModal';

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [deleteModal, setDeleteModal] = useState(false);
  const [itemId, setItemId] = useState(0);
  const [updateModal, setUpdateModal] = useState(false);

  // Delete Operations
  const deleteProduct = (id) => {
    setDeleteModal(true);
    setItemId(id);
  }
  const handleCloseDeleteAction = () => {
    setDeleteModal(false);
  }

  // Update Operations
  const updateProduct = (id) => {
    setUpdateModal(true);
    setItemId(id)
  }
  const handleCloseUpdateAction = () => {
    setUpdateModal(false);
  }

  useEffect(() => {
    if (!token) navigate("/login")
    const productUrl = 'http://localhost:3000/product/all';
    axios.get(productUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    },)
      .then(response => {
        const products = response.data;
        console.log('Products:', products[0]);
        setData(products[0]);
      })
      .catch(error => {
        console.error('Axios error:', error.message);
      });

  }, [])

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      width: '120px'
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
      width: '270px'
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
      width: '100px'
    },
    {
      name: 'Edit',
      selector: row => <button onClick={() => updateProduct(row.id)} className="bg-green-200 border border-gray-300 px-3 py-2 rounded flex items-center">Update</button>,
      sortable: true,
      width: '100px'
    },
    {
      name: 'Delete',
      selector: row => <button onClick={() => deleteProduct(row.id)} className="bg-red-200 border border-gray-300 px-3 py-2 rounded flex items-center">Delete</button>,
      sortable: true,
      width: '100px'
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
              <h1 className="py-3 text-red-400 font-medium">All Products</h1>
              <div className='my-3 flex flew-row justify-between'>
                <input type="text" onChange={handleFilter} className="border border-gray-100 p-2" placeholder='Search ...' />
                <button onClick={handleAddButtonClick} className="bg-red-400 py-2 px-4 text-white ">+ Add</button>
                {deleteModal && <DeleteModal handleCloseDeleteAction={handleCloseDeleteAction} itemId={itemId} />}

                {updateModal && <UpdateModal handleCloseUpdateAction={handleCloseUpdateAction} itemId={itemId} />}

                {isModalOpen ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-2xl px-6">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
              <DataTable columns={columns} data={data} selectableRows fixedHeader pagination />
            </div>
          </div>
          <div className=" w-1/5">
            <Account />
          </div>
        </div>
      </div>
    </div>);
}

export default Products;
