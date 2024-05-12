import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Trips.scss"; // Import your CSS file for styling
import { getUserTrips } from "../../features/tripSlice";
import { getUser } from "../../features/userSlice";
import { toast } from "react-toastify";

const Trips = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(getUser);

  useEffect(() => {
    const fetchUserTrips = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (!user) {
          navigate("/login");
          return;
        }

        const response = await dispatch(getUserTrips());
        setTrips(response.payload); // Assuming the payload contains the trip data
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserTrips();
  }, [user, navigate, dispatch]);
 
  const handleDelete = async (tripId) => {
    try {
      // Send a delete request to your backend API to delete the invitation
      await axios.delete(`/api/trips/${tripId}`);
      // Remove the deleted invitation from the state
      setTrips(trips.filter(trip => trip._id !== tripId));
     toast.success("Trip deleted");
    } catch (error) {
      console.error("Error deleting Trip:", error);
    }
  };
  // Render user trips
  return (
    <div className="trips-container">
      <h2 className="trips-heading">Your Trips</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : trips.length > 0 ? (
        <ul className="trips-list">
          {trips.map((trip) => (
            <li key={trip._id} className="trip-item">
            
              <p>Destination: {trip.destination}</p>
              <p>Start Date: {trip.startDate}</p>
              <p>End Date: {trip.endDate}</p>
              <p>Cost: {trip.cost}</p>
              <p>Description: {trip.description}</p>
              <div className="icons">
              <i className="fa-solid fa-trash-can" onClick={() => handleDelete(trip._id)}></i>
                </div>
            </li>
          ))}
          
        </ul>
      ) : (
        <p>You don't have any trips yet! Perhaps plan one?</p>
      )}
    </div>
  );
};

export default Trips;
