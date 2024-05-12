import React from "react";
import "./TripResult.css"; 


const TripResult = ({ trip }) => {

  return (
    <div className="trip-result">
      <h4>{trip.name}</h4>
      <p>Destination: {trip.destination}</p>
      <p>Start Date: {trip.startDate}</p>
      <p>End Date: {trip.endDate}</p>
      <p>Cost: {trip.cost}</p>
      <p>Description: {trip.description}</p>
      
    </div>
  );
};

export default TripResult;