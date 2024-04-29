import React from "react";
import "../Style/Contact.css";
import Map from "./Map";

const ContactPage = () => {
  return (
    <>
    <div>
      <div className="hlo">
        <h1>Get in touch Contact </h1>
         <h6>
         Contact our hospital for medical assistance, appointments, or general inquiries.
        </h6> 
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <i class="fa-sharp fa-regular fa-phone"></i>
          <h2>Mobile Number (Emergency)</h2>
          <p> 9881155391</p>
        </div>

        <div className="contact-info">
          <i class="fa-solid fa-location-dot"></i>
          <h2>Address</h2>
          <p> Aditya Hospital,
Dongar Gaon Road, Near Om Accident Hospital,
Shahada</p>
        </div>

        <div className="contact-info">
          <i class="fa-sharp fa-solid fa-envelope"></i>
          <h2>Email</h2>
          <p>drvhp@yahoo.com </p>
          {/* <p>drvishalpatel2980@gmail.com </p> */}
        </div>

        <div className="contact-info">
          <i class="fa-solid fa-business-time"></i>
          <h2>Working Hours</h2>
          <p>Monday - Saturday : 9:00 AM - 8:00 PM</p>
        </div>
      </div>
    </div>
    <Map/> 

    </>
  );
};

export default ContactPage;
