import React from "react";
import "../Style/Choose.css";

const WhyChooseHealthCare = () => {
  return (
    <div className="why-choose-health-care">
      <div className="hlo">
        <h1>"Why choose Aditya Hospital?"</h1>
        <h6>
          {" "}
          Read docter-produced health and medical information written for you to
          make informed decision about your health concerns{" "}
        </h6>
      </div>

      {/* First Row */}
      <div className="row">
        <div className="col">
          <div className="card">
            <h2>More Experience</h2>
            <p>
              Every year, more a millons people come to EleHealth for care.our
              highly specalized experts are deeply experienced in treating race
              and complex conditions
            </p>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <h2>The Right Answer</h2>
            <p>
              Getting effective treatment depends identifying the right
              problem 88 percent of patients who came to mayo Clinic for a
              second opinion received a new or refined diagnosis
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row">
        <div className="col">
          <div className="card">
            <h2>Seamless Care</h2>
            <p>
            Every aspect of your care is coordinated and teams of experts work together to provide exactly the care you need What might take months elsewhere can often done in days here 
            </p>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <h2>Unparalleled Expertise </h2>
            <p>
            EleHealth experts are some the best in the world in the us News & World Report Rankings of top hospitals EleHealth is consistently ranked among the top hospitals in the nation. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseHealthCare;
