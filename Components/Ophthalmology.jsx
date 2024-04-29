// import React from "react";
// import ImageCard from "./ImageCard";
// import "../Style/Opthalmology.css";

// const ServicesPage = () => {
//   return (
//     <div className="ophthalmology-page">
//       <div className="service-section">
//         <h2 className="section-heading">Ophthalmology</h2>
//         <p className="section-info">
//           Our utmost concern is your journey through motherhood and the well-being of your baby. We aspire for every mother to experience{" "}
//           <br /> her own unique story filled with love, care, and pride, and we would be honoured to be a part of that journey!
//         </p>

//         <div className="image-container">
//           <div className="image-row">
//             <div className="new-image-card"> {/* Changed class name from ImageCard to new-image-card */}
//               <ImageCard
//                 name="Pterygium surgery"
//                 imageUrl="./Assets/petrijim.png"
//               />
//             </div>
//             <div className="new-image-card"> {/* Changed class name from ImageCard to new-image-card */}
//               <ImageCard
//                 name="Pre Marital Counseling"
//                 imageUrl="./Assets/sc2.png"
//               />
//             </div>
//             <div className="new-image-card"> {/* Changed class name from ImageCard to new-image-card */}
//               <ImageCard
//                 name="Slit lamp examination"
//                 imageUrl="./Assets/sc1.png"
//               />
//             </div>
//           </div>
//           <div className="image-row">
//             <div className="new-image-card"> {/* Changed class name from ImageCard to new-image-card */}
//               <ImageCard
//                 name="Autorefractometer"
//                 imageUrl="./Assets/autorefractometer.png"
//               />
//             </div>
//             <div className="new-image-card"> {/* Changed class name from ImageCard to new-image-card */}
//               <ImageCard
//                 name="Examination of Retina in hypertension and diabetes mellitus"
//                 imageUrl="./Assets/qwert.jpg"
//               />
//             </div>
//             <div className="new-image-card"> {/* Changed class name from ImageCard to new-image-card */}
//               <ImageCard
//                 name="Phacoemulsification cataract surgery and IOL implantation"
//                 imageUrl="./Assets/cata_1.jpg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;



import React from 'react';
import ImageCard from './ImageCard';
import '../Style/Opthalmology.css';

const Ophthalmology = () => {
  return (
    <div className="ophthalmology-page">
      <h2 className="page-heading">Ophthalmology</h2>
      <p className="page-info">
        Our utmost concern is your journey through motherhood and the well-being of your baby. We aspire for every mother to experience her own unique story filled with love, care, and pride, and we would be honored to be a part of that journey!
      </p>

      <div className="image-container">
        <div className="image-row">
          <div className="ImageCard">
            <h3>Pterygium surgery</h3>
            <img src="./Assets/petrijim.png" alt="Pterygium surgery" />
          </div>
          <div className="ImageCard">
            <h3>visual field testing</h3>
            <img src="./Assets/sc2.png" alt="Pre Marital Counseling" />
          </div>
          <div className="ImageCard">
            <h3>Slit lamp examination</h3>
            <img src="./Assets/sc1.png" alt="Slit lamp examination" />
          </div>
        </div>
        <div className="image-row">
          <div className="ImageCard">
            <h3>Autorefractometer</h3>
            <img src="./Assets/autorefractometer.png" alt="Autorefractometer" />
          </div>
          <div className="ImageCard">
            <h3>Examination of Retina in hypertension and diabetes mellitus</h3>
            <img src="./Assets/qwert.jpg" alt="Examination of Retina in hypertension and diabetes mellitus" />
          </div>
          <div className="ImageCard">
            <h3>Phacoemulsification cataract surgery and IOL implantation</h3>
            <img src="./Assets/cata_1.jpg" alt="Phacoemulsification cataract surgery and IOL implantation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ophthalmology;
