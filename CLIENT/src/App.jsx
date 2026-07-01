import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ContactUs from "./pages/ContactUs";
import {Toaster} from "react-hot-toast";
import UserDashboard from "./Pages/dashboard/userDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
{/* dashboard route */}
<Route>

</Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;