import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Register from './Screens/Register';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import Settings from './Screens/Settings';
import Home from './Screens/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* {isLoggedIn ? (
          <>
            <Redirect to="/dashboard" />
          </>
        ) : (
          <>
            <Redirect to="/login" />
          </>
        )} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
