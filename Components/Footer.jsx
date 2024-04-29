// import React from "react";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// export default function App() {
//   return (
//     <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
//       <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//         <div className="me-5 d-none d-lg-block"></div>
//       </section>

//       <section className="">
//         <MDBContainer className="text-center text-md-start mt-8">
//           <MDBRow className="mt-3">
//             <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 <MDBIcon icon="gem" className="me-3" /> Our Treatments :
//                 Gynecology
//               </h6>
//               <ul style={{ listStyleType: "none", padding: 0 }}>
                
//                 <li >Gynecological Services</li>
//                 <li>Sonography center</li>
//                 <li>Infertility treatment</li>
//                 <li>Adolescent clinic</li>
//                 <li>Laparoscopic surgery</li>
//                 <li>Equipped Operation Theater </li>
//                 <li>Govt.approved MTP Centre (Less than 12 weeks)</li>
               
//               </ul>
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-7">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 <MDBIcon icon="gem" className="me-3" /> Our Treatments :
//                 Ophthalmology
//               </h6>

//               {/* Our Treatments Ophthalmology</h6> */}
//               <ul style={{ listStyleType: "none", padding: 0 }}>
//                 <li>
//                   Phacoemulsification cataract surgery and IOL implantation
//                 </li>
//                 <li>Autorefractometer</li>
//                 <li>
//                   Examination of Retina in hypertension and diabetes mellitus
//                 </li>
//                 <li>Pterygium surgery</li>
//               </ul>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-7">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 <MDBIcon icon="gem" className="me-3" />
//                 Contact
//               </h6>
//               <ul style={{ listStyleType: "none", padding: 0 }}>
//                 <li>
//                   <br />
//                   <MDBIcon icon="home" className="me-2" />
//                   Aditya Maternity and Eye Hospital
//                   <br /> Address: Aditya Hospital, Dongar Gaon Road, Near Om
//                   Accident Hospital, Shahada
//                 </li>
//                 <br />

//                 <li>
//                   <MDBIcon icon="envelope" className="me-3" />
//                   drvhp@yahoo.com
//                 </li>

//                 <li>
//                   <MDBIcon icon="phone" className="me-3" />
//                   9881155391
//                 </li>
//               </ul>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>
//     </MDBFooter>
//   );
// }



import React from 'react';
import '../Style/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Our Treatment - Gynecology</h4>
            <ul>
              <li>Gynecological Services</li>
              <li>Sonography center</li>
              <li>Infertility treatment</li>
              <li>Adolescent clinic</li>
              <li>Laparoscopic surgery</li>
              <li>Equipped Operation Theater</li>
              <li>Govt.approved MTP Centre (Less than 12 weeks)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Our Treatment-Ophthalmology</h4>
            <ul>
              <li>Phacoemulsification cataract surgery and IOL implantation</li>
              <li>Autorefractometer</li>
              <li>Examination of Retina in hypertension and diabetes mellitus</li>
              <li>Pterygium surgery</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact</h4>
            <ul>
              <li>
                <i className="fas fa-home me-2"></i>
                Aditya Maternity and Eye Hospital<br />
                Address: Aditya Hospital, Dongar Gaon Road, Near Om Accident Hospital, Shahada
              </li>
              <br />
              <li>
                <i className="fas fa-envelope me-3"></i>
                drvhp@yahoo.com
              </li>
              <li>
                <i className="fas fa-phone me-3"></i>
                9881155391
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
