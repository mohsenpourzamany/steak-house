import React from "react";
import "../styles/Footer.css";
import instagram from "../assests/instagram.png";
import facebook from "../assests/facebook.png";
import twitter from "../assests/twitter.png";
import whatsapp from "../assests/whatsapp.png";
import linkedin from "../assests/linkedin.png";
import telegram from "../assests/telegram.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="/" className="Link" style={{ backgroundImage: `url(${instagram})` }}></Link>
        <Link to="/" className="Link" style={{ backgroundImage: `url(${facebook})` }}></Link>
        <Link to="/" className="Link" style={{ backgroundImage: `url(${twitter})` }}></Link>
        <Link to="/" className="Link" style={{ backgroundImage: `url(${whatsapp})` }}></Link>
        <Link to="/" className="Link" style={{ backgroundImage: `url(${telegram})` }}></Link>
        <Link to="/" className="Link" style={{ backgroundImage: `url(${linkedin})` }}></Link>
        <div>
          <p>&copy;2021 SteakHouse.com </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
