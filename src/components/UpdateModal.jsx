import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function UpdateModal({ handleCloseUpdateAction, itemId }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleUpdateButtonClick = () => {
        console.log("Twagiyee!");
        console.log("Item id: ", itemId)
        const token = localStorage.getItem("token");

        const updateUrl = `http://localhost:3000/product/update/${itemId}`
        axios.put(`${updateUrl}`, { name: name, description: description, price: price }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then(response => {
            console.log(response);
            toast.success('Product Updated Successfully!');
        })
            .catch(error => {
                console.error('Axios error:', error.message);
                toast.error('Error Occured!');
            });

        handleCloseUpdateAction()
    }

    const exit = () => {
        handleCloseUpdateAction()
    }


    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-2xl px-6">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-lg font-medium text-center text-red-400">
                                Are you Sure?
                            </h3>
                        </div>

                        <form onSubmit={handleUpdateButtonClick}>
                            <div className="relative px-16 py-1 mt-2 flex-auto">
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="name"  className="w-36">
                                        Name
                                    </label>
                                    <input
                                        type="text" required
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="border w-52 p-2"
                                        placeholder="Name"
                                    />
                                </div>
                            </div>

                            <div className="relative px-16 py-1 flex-auto">
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="description"  className="w-36">
                                        Description
                                    </label>
                                    <input
                                        type="text" required
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="border w-52 p-2"
                                        placeholder="Descriptions"
                                    />
                                </div>
                            </div>

                            <div className="relative px-16 py-1 flex-auto">
                                <div className="mb-4 flex items-center">
                                    <label htmlFor="price"  className="w-36">
                                        Price
                                    </label>
                                    <input
                                        type="number" required
                                        id="price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="border w-52 p-2"
                                        placeholder="Price"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between px-12 py-3 border-t border-solid border-slate-200 rounded-b">
                                <button
                                className={`bg-red-400 text-white active:bg-red-600 font-medium uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                    
                                    type="submit"
                                >
                                    SAVE CHANGES
                                </button>
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={exit}
                                >
                                    CANCEL
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
