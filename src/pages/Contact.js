import React from "react";
import "../styles/Contact.css";
import steak2 from "../assests/steak2.jpg";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${steak2})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter your Name" />
          <label htmlFor="email">Full Name</label>
          <input name="name" placeholder="Enter your Email" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter your Message"
            rows={7}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
