import React from "react";
import "../Style/Doctor.css";

const DoctorPage = () => {
  return (
    <div className="container doctor-page-container">
      <div className="hlo">
        <h1>You're in Safe Hands At Aditya Hospital</h1>
        <h6>
          Our panel of experts is ready to take you on a wonderful motherhood
          adventure!
        </h6>
      </div>

      <div className="row doctor-container">
        <div className="col-md-6">
          <div className="doctor-card">
            <img
              src="./Assets/Dr.Vivek.jpg"
              alt="Dr. Vivek Patel"
              className="doctor-image"
            />
            <h2>Dr. Vivek Patel</h2>
            <p>MBBS BOMS(Pune)</p>
            <p>Specialty: Ophthalmologist</p>
            <p>Experience: 20 years</p>
            {/* <p>Phone: +1 (555) 789-0123</p> */}
            {/* <p>Email: drvivek@example.com</p> */}
          </div>
        </div>

        <div className="col-md-6">
          <div className="doctor-card">
            <img
              src="./Assets/Dr.Meghna.jpg"
              alt="Dr. Meghna Patel"
              className="doctor-image"
            />
            <h2>Dr. Meghana Patel</h2>
            <p>MBBS DGO</p>
            <p>Specialty: Gynaecologist</p>
            <p>Experience: 20 years</p>
            {/* <p>Phone: +1 (555) 987-6543</p> */}
            {/* <p>Email: drmeghna@example.com</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
