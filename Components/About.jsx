// About.js
import React from "react";
import "../Style/About.css";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <h2>About Our Clinic</h2>
          Introducing Aditi Hospital, the Super Speciality Hospital situated in
          Nashik Annexe! We are thrilled to unveil our dedicated facility
          focused on maternity, gynecology, IVF, and child care. Recognizing the
          profound and transformative journey to parenthood, Aditi Hospital is
          committed to providing unwavering support throughout every stage.
          Established in 1994, Aditi Hospital is part of a leading chain of
          hospital networks in Western India. Our mission is to redefine
          healthcare facilities in Maharashtra, prioritizing top-notch medical
          care, cutting-edge technology, and patient well-being. Our
          comprehensive range of medical services covers various specialties,
          including Cardiology, Neurology, Haematology & Bone Marrow
          Transplants, Organ Transplants, Oncology, Orthopaedics, IVF, Urology,
          Endocrinology, and Gastroenterology, among others. Aditi Hospital
          boasts distinctions such as being a prominent Liver Transplant Centre
          in Western India, conducting a significant number of Bone Marrow
          Transplants, and pioneering Neurosciences in Maharashtra.
        </div>
        <div className="col-md-5">
          <img
            src={process.env.PUBLIC_URL + "about.jpg"}
            alt="Clinic"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
