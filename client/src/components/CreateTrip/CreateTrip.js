import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import './CreateTrip.css'; // Import CSS file for styling
import { toast } from "react-toastify";
import {createTrip} from "../../features/tripSlice";


const CreateTrip = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalDays, setTotalDays] = useState('');
  const dispatch= useDispatch();
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    try{
   if(name && destination && description && cost &&startDate && endDate && totalDays){
    
   dispatch(createTrip({name, destination, description,cost,startDate,endDate,totalDays}))
   
   toast.success("Trip Created Successfully");
   
   
   setName('');
   setDestination('');
   setDescription('');
   setCost('');
   setStartDate('');
   setEndDate('');
   setTotalDays('');
  
  }
  else {
    toast.error("Please fill all credentials");
  }
}catch(error){
  toast.error("Error in Submission");
}
};


  return (
    <div className="create-trip-container">
      
      <div className="card-container">
      <div className="image-container">
      <h2>..... Create <br></br>your own Trip</h2>
  </div>
      <form onSubmit={handleSubmit} className="create-trip-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Destination:</label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Cost:</label>
          <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Total Days:</label>
          <input type="number" value={totalDays} onChange={(e) => setTotalDays(e.target.value)} required />
        </div>
        <button type="submit">Create Trip</button>
      </form>
      </div>
    </div>
  );
};

export default CreateTrip;
