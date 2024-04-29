// InstantAppointmentPage.js

import React from "react";
// import "../Style/Appointment.css"; // Corrected the CSS file name

const InstantAppointmentPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-end mt-4">
        {/* <h2>Instant Appointment</h2> */}
      </div>

      <div className="row mt-4">
        <div className="col-md-6 mt-4">
          <h2>Doctors</h2>
          <p>Read about our expert doctors and their qualifications.</p>
        </div>
        <div className="col-md-6 mt-4">
          <h2>24/7 Services</h2>
          <p>We provide round-the-clock services to meet your healthcare needs.</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 mt-4">
          <h2>Quality Doctors</h2>
          <p>Our team of doctors is dedicated to providing high-quality care.</p>
        </div>
        <div className="col-md-6 mt-4">
          <h2>World-Class Environment</h2>
          <p>Experience healthcare in a world-class and comfortable environment.</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col mt-4">
          <button className="btn btn-primary">Make an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default InstantAppointmentPage;
