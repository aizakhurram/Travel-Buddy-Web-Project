// SearchTrips.js

import React, { useState } from "react";
import axios from "axios";
import TripResult from "../TripResult/TripResult"; // Import a component to display search results
import "./FindTrips.css"; // Import CSS file for styling



const SearchTrips = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/trips/search", {
        params: {
          destination,
          startDate,
          endDate,
        },
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching trips:", error);
    }
  };

  return (
    <div className="search-container">
    
      <h2>Search for Trips</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
          {searchResults.map((trip) => (
            <TripResult key={trip.id} trip={trip} />
          ))}
        </div>
      )}
     
    </div>
  );
};

export default SearchTrips;
