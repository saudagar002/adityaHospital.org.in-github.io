// ServicesPage.js
import React from "react";
import ImageCard from "./ImageCard";
import "../Style/Services.css";

const ServicesPage = () => {
  return (
    <div>
      <h1 className="page-heading"> Obstetrics and Gynecology Department </h1>
      <p className="page-info">
        We care for your journey of motherhood, and your baby’s well-being all
        through. We hope every mother lives her story with love, care and pride,
        and we wish to be a part of it!
      </p>

      <div className="image-row">
        <div className="image-row">
          <ImageCard name="ANC Check up" imageUrl="Pterygium surgery.avif" />

          <ImageCard
            name="Gynecological Services  "
            imageUrl="Sonography.jpg"
          />
          <ImageCard name="Sonography center  " imageUrl="Sonography.jpg" />
        </div>
        <div className="image-row">
          <ImageCard
            name="Well equipped Operation Theater and labour room "
            imageUrl="gynecological care.jpeg"
          />
          <ImageCard
            name="Govt. approved MTP centre (Less than 12 weeks)"
            imageUrl=""
          />
          <ImageCard name="Govt. Approved Tubectomy centre " imageUrl="p4.jpeg" />
          <ImageCard name="Infertility treatment    " imageUrl="./Assets/" />
        </div>
        <div className="image-row">
          <ImageCard name="Menopause clinic     " imageUrl="p2.jpg" />
          <ImageCard name="Adolescent clinic" imageUrl="p1.jpg" />
          <ImageCard name="laproscopic surgery " imageUrl="laparosc.jpg" />
        </div>
      </div>

      <div>
        <h1 className="page-heading">Ophthalmology Department</h1>
        <p className="page-info">
          Our utmost concern is your journey through motherhood and the
          well-being of your baby. We aspire for every mother to experience her
          own unique story filled with love, care, and pride, and we would be
          honoured to be a part of that journey!
        </p>

        <div className=" image-row">
          <ImageCard
            name="Phacoemusification cataract surgery and IOL implantation"
            imageUrl=""
          />
          <ImageCard name="Pre Marital Counseling " imageUrl="" />

          <ImageCard name="Slit lamp examination" imageUrl="" />

          <ImageCard name="lactation Counselling" imageUrl="" />

          <div className=" image-row">
            <ImageCard name="Autorefractometer " imageUrl="" />
            <ImageCard
              name="Examination of Retina in hypertension and diabetes mellitus"
              imageUrl=""
            />
            <ImageCard name="Pterygium surgery" imageUrl="" />
            <ImageCard name="High Risk Pregnancies" imageUrl="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
