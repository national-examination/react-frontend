import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function DeleteModal({ handleCloseDeleteAction, itemId }) {
    const handleDeleteButtonClick = () => {
        console.log("Twagiyee!");
        console.log("Item id: ", itemId)
        const token = localStorage.getItem("token");
        const deleteUrl = `http://localhost:3000/product/${itemId}`
        axios.delete(`${deleteUrl}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then(response => {
            console.log(response);
            toast.success('Product Deleted Successfully!');
        })
            .catch(error => {
                console.error('Axios error:', error.message);
                toast.error('Error Occured!');
            });

        handleCloseDeleteAction()
    }

    const exit = () => {
        handleCloseDeleteAction()
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

                        <form onSubmit={handleDeleteButtonClick}>
                            <div className="flex items-center justify-between px-12 py-3 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className={`bg-red-400 text-white active:bg-red-600 font-medium uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                                    type="submit"
                                >
                                    Yes
                                </button>
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={exit}
                                >
                                    No
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
