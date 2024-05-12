import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Place from "./components/Place/Place";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Trips from "./components/Trips/Trips";
import FindTrips from "./components/FindTrips/FindTrips";
import CreateTrip from "./components/CreateTrip/CreateTrip";
import CreateInvitation from "./components/CreateInvite/CreateInvitation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Invites from "./components/Invites/Invites";




const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<Place />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userTrips" element={<Trips />} />
          <Route path="/search" element={<FindTrips />} />
          <Route path="/create" element={<CreateTrip />} />
          <Route path="/view" element={<Invites />} />
          <Route path="/createInvite" element={<CreateInvitation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
