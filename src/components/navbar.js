import React from "react";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
// import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
  // const[showLinks , setshowLinks] = usestate(false) ;
  // function click(){
  //     setshowLinks(!showLinks);
  //  id ={showLinks ? "open" : "close"}
  // }

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo} alt="/" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/">Menu</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <button>
                  <ReorderIcon />
                </button> */}
      </div>
    </div>
  );
};

export default Navbar;
