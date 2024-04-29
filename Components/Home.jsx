


import React from "react";
import "../Style/Home.css";
import Doctor from "./Doctor";
// import Choose from "./Choose";
import Cardss from "./Cardss"
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div>
      <div className="homepage-container">
        {/* Background image with text overlay */}
        <div className="background-image">
          <div className="text-overlay">
            <h1>"Discover the joys of motherhood with our nurturing community."</h1> 
             {/* <p>"Discover the joys of motherhood with our nurturing community."</p>     */}
          </div>
        </div>
      </div>
      <Doctor />
     <Contact />
    </div>
  );
};

export default HomePage;
