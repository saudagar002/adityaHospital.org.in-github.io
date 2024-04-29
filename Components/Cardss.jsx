

import React from "react";
import "../Style/Nearyou.css";

const Card = ({ imgSrc, title, text, updatedAt }) => (
  <div className="col-md-4 card-container">
    {" "}
  
    <div className="hlo">{/* <h3>Aditya Clinic</h3> */
    
   
    
    }</div>
    <div className="card">
      <img
        className="card-img-top"
        src={imgSrc}
        alt="Card image cap"
        style={{ height: "10cm", display: "block", margin: "0 auto" }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
                    
    </div>
  </div>
);

const CardGroup = () => {
  const cardData = [
    {
      imgSrc: "./Assets/Card9.jpg",

      title: "Hospital Front View",
    },
    {
      imgSrc: "./Assets/Card2.jpg",

      title: "Staff Training",
    },
    {
      imgSrc: "./Assets/Card1.jpg",

      title: "Hospital Staff",
    },
    {
      imgSrc: "./Assets/Card3.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "CPR Training",
    },
    {
      imgSrc: "./Assets/Card4.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "Staff Traning",
    },
    {
      imgSrc: "./Assets/Dr.Meghna.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "Gynac Consulting",
      // updatedAt: "Last Updated 2 days ago",
    },
    {
      imgSrc: "./Assets/Card8.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "Gynac OPD Gynac Reception Counter",
      // updatedAt: "Last Updated 2 days ago",
    },
    {
      imgSrc: "./Assets/Card12.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "Labour Room",
      // updatedAt: "Last Updated 2 days ago",
    },
    {
      imgSrc: "./Assets/Card13.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "Gynac Operation Theater",
      // updatedAt: "Last Updated 2 days ago",
    },
    {
      imgSrc: "./Assets/Dr.Vivek.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "Ophthalmic Consultation",
      // updatedAt: "Last Updated 2 days ago",
    },
    {
      imgSrc: "./Assets/Card6.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "Fire Extinguisher Training",
      // updatedAt: "Last Updated 2 days ago",
    },
    {
      imgSrc: "./Assets/op.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "Ophthalmic operation theater",
      // updatedAt: "Last Updated 2 days ago",
    },
    {
      imgSrc: "./Assets/www.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "General Ward",
      // updatedAt: "Last Updated 2 days ago",
    },
    {
      imgSrc: "./Assets/sp.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "Special Room",
      // updatedAt: "Last Updated 2 days ago",
    },

    {
      imgSrc: "./Assets/gw.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "General Ward",
      // updatedAt: "Last Updated 2 days ago",
    },

    {
      imgSrc: "./Assets/Card7.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "BMW Training",
      // updatedAt: "Last Updated 2 days ago",
    },

    {
      imgSrc: "./Assets/icr.jpg",
      style: {
        height: "10cm",
        display: "block",
        margin: "0 auto",
      },
      title: "HIC Training",
      // updatedAt: "Last Updated 2 days ago",
    },
    // Add more card data here...
  ];

  const groupedCards = [];
  for (let i = 0; i < cardData.length; i += 3) {
    groupedCards.push(cardData.slice(i, i + 3));
  }

  return (
    <div>
      {groupedCards.map((group, index) => (
        <div key={index} className="card-group row">
          {group.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              imgSrc={card.imgSrc}
              title={card.title}
              text={card.text}
              updatedAt={card.updatedAt}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardGroup;
