import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Account from '../components/Account';
import { toast } from 'react-toastify';
import axios from 'axios';

function Product() {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        console.log(isLoggedIn)
        if (!token) navigate("/login")
    })

    const productUrl = "http://localhost:3000/product/create"
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(productUrl, { name: name, description: description, price: price }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response);
                toast.success('Product Created Successfully!');
            })
            .catch(error => {
                console.error('Axios error:', error.message);
                toast.error('Please provide all inputs!');
            });

        setName("")
        setDescription("")
        setPrice("")
    }

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow bg-gray-50">
                <div className="flex flex-row justify-between">
                    <div className="px-10 w-4/5">
                        <Navbar />
                        <div>
                            <h1 className='text-red-400 text-center mb-4'>Manage Product</h1>

                            <form onSubmit={handleSubmit} className="flex flex-col px-20 align-center justify-center">
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="name" className="text-gray-700 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text" required
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="p-2 border border-gray-300 rounded"
                                        placeholder="Name"
                                    />
                                </div>

                                <div className="flex flex-col mb-2">
                                    <label htmlFor="description" className="text-gray-700 mb-2">
                                        Description
                                    </label>
                                    <input
                                        type="text" required
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="p-2 border border-gray-300 rounded"
                                        placeholder="Descriptions"
                                    />
                                </div>


                                <div className="flex flex-col mb-2">
                                    <label htmlFor="price" className="text-gray-700 mb-2">
                                        Price
                                    </label>
                                    <input
                                        type="number" required
                                        id="price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="p-2 border border-gray-300 rounded"
                                        placeholder="Price"
                                    />
                                </div>

                                <button type="submit" className="bg-red-400 text-white px-4 py-3 rounded font-medium mt-4">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className=" w-1/5">
                        <Account />
                    </div>
                </div>
            </div>
        </div>);
}

export default Product;
