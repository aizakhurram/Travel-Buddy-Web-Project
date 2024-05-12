import React, { useState } from "react";
import Card from "./Card/Card";
import Recommendation from "./Recommendation/Recommendation";
import "./Home.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPlace } from "../../features/placeSlice";

const Home = () => {
  const [place, setPlace] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMove = () => {
    window.scroll(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(addPlace(place));
    setPlace("");
    navigate("/place");
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="background">
          <img src="../images/thom-holmes-szytBrSiBJM-unsplash.jpg"  />
        </div>
        <div className="content">
          <div className="title">
            <h1>Travel to Explore</h1>
            <p>
            A journey of a thousand miles begins with a single step!
            </p>
          </div>
          <div className="search">
            <div className="container">
              <input
                type="text"
                placeholder="Search your destination"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
        </div>
      </div>
      <div className="move" onClick={handleMove}>
        <i className="fa-solid fa-angles-up"></i>
      </div>
      <div className="container">
        <Card />
      </div>
      <div className="container">
        <Recommendation />
      </div>
    </div>
  );
};

export default Home;
