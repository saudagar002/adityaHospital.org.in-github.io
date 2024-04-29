// import React from "react";
// import ImageCard from "./ImageCard";
// import "../Style/Services.css";

// const ServicesPage = () => {
//   return (
//     <div>

//       <h1 className="page-heading">Our Services</h1>
//           <div>
//         <h2 className="section-heading">Obstetrics and Gynecology</h2>
//         <p className="section-info">
//           We care for your journey of motherhood, and your baby’s well-being all
//           through. We hope every mother lives her story with love, <br />
//           care and pride, and we wish to be a part of it!
//         </p>

//         <div className="image-container">
//           <div className="image-row">
//             <div className="ImageCard ">
//               <ImageCard
//                 name="Gynecological Services"
//                 imageUrl="./Assets/Gynecological.jpg"
//                 // style={{ fontSize: "400px", fontWeight: "bold" }}
//               />
//             </div>
//             <div className="ImageCard">
//               <ImageCard
//                 name= "Sonography center"
//                 imageUrl="./Assets/Sonography.jpg"
//               />
//             </div>
//             <div className="ImageCard">
//               <ImageCard
//                 name="Well equipped Operation Theater and labour room"
//                 imageUrl="./Assets/sp.jpg"
//               />
//             </div>
//           </div>
//           <div className="image-row">
//             <div className="ImageCard">
//               <ImageCard
//                 name="Infertility treatment"
//                 imageUrl="./Assets/treatment-options-infertility.png"
//               />
//             </div>
//             <div className="ImageCard">
//               <ImageCard
//                 name="laparoscopic surgery"
//                 imageUrl="./Assets/laparosc.jpg"
//               />
//             </div>
//             <div className="ImageCard">
//               <ImageCard
//                 name="Adolescent clinic"
//                 imageUrl="./Assets/Cataract.jpg"
//               />
//             </div>
//           </div>
//           <div className="image-row">
//             <div className="ImageCard">
//               <ImageCard name="ANC Check up" imageUrl="./Assets/AWT.jpeg" />
//             </div>
//             <div className="ImageCard">
//               <ImageCard
//                 name="Govt.approved MTP Centre"
//                 imageUrl="./Assets/MTP.png"
//               />
//             </div>
//             <div className="ImageCard">
//               <ImageCard
//                 name="Govt. Approved Tubectomy centre"
//                 imageUrl="./Assets/tubectomy.png"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

      



           
            
            
//       </div>
  
//   );
// };

// export default ServicesPage;



import React from 'react';
import "../Style/Services.css";

const Gyanocoloy = () => {
  return (
    <div className="gyanocoloy">
      <h2>Gynecology</h2>
      <p>
        We care for your journey of motherhood, and your baby’s well-being all
        through. We hope every mother lives her story with love,
        care and pride, and we wish to be a part of it!
      </p>

      <div className="image-container">
        <div className="image-row">
          <div className="ImageCard">
            {/* ImageCard component content */}
            <h3>Gynecological Services</h3>
            <img src="./Assets/Gynecological.jpg" alt="Gynecological Services" />
          </div>
          <div className="ImageCard">
            {/* ImageCard component content */}
            <h3>Sonography center</h3>
            <img src="./Assets/Sonography.jpg" alt="Sonography center" />
          </div>
          <div className="ImageCard">
            {/* ImageCard component content */}
            <h3>Well equipped Operation Theater and labour room</h3>
            <img src="./Assets/card13.jpg" alt="Well equipped Operation Theater and labour room" />
          </div>
        </div>
        <div className="image-row">
          <div className="ImageCard">
            {/* ImageCard component content */}
            <h3>Infertility treatment</h3>
            <img src="./Assets/treatment-options-infertility.png" alt="Infertility treatment" />
          </div>
          <div className="ImageCard">
            {/* ImageCard component content */}
            <h3>laparoscopic surgery</h3>
            <img src="./Assets/laparosc.jpg" alt="laparoscopic surgery" />
          </div>
          <div className="ImageCard">
            {/* ImageCard component content */}
            <h3>Adolescent clinic</h3>
            <img src="./Assets/Cataract.jpg" alt="Adolescent clinic" />
          </div>
        </div>
        <div className="image-row">
          <div className="ImageCard">
            {/* ImageCard component content */}
            <h3>ANC Check up</h3>
            <img src="./Assets/AWT.jpeg" alt="ANC Check up" />
          </div>
          <div className="ImageCard">
            {/* ImageCard component content */}
            <h3>Govt.approved MTP Centre</h3>
            <img src="./Assets/MTP.png" alt="Govt.approved MTP Centre" />
          </div>
          <div className="ImageCard">
            {/* ImageCard component content */}
            <h3>Govt. Approved Tubectomy centre</h3>
            <img src="./Assets/tubectomy.png" alt="Govt. Approved Tubectomy centre" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gyanocoloy;
