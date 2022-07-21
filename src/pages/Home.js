import React from "react";
import banner from "../assests/banner.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1> STEAK HOUSE </h1>
        <p>AMERICAN STEACK AT A CLICK</p>
        <button to="/Home">Order Now</button>
      </div>
    </div>
  );
}

export default Home;
