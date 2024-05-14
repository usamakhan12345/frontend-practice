import React from "react";
import "./style.css";
import firstcardImage from "../../assets/gtestimg 2.jpg";
import secondcardImage from "../../assets/test img.jpg";
const Cards = () => {
  return (
    <div className="card-container">
      <div className="first-card">
        <img className="card-image" src={firstcardImage} />
        <h1>Implementing a HTML AND CSS into your user interface project</h1>
        <h3>Htm Structure</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga
          perspiciatis velit unde, magni voluptatum.
        </p>
        <h3>Css Structure</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga
          perspiciatis velit unde, magni voluptatum.
        </p>
      </div>
      <div className="second-card">
        <img className="card-image" src={secondcardImage} />
        <h1>Implementing a HTML AND CSS into your user interface project</h1>
        <h3 className="card-subHeading">Htm Structure</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga
          perspiciatis velit unde, magni voluptatum.
        </p>
        <h3 className="card-subHeading">Css Structure</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga
          perspiciatis velit unde, magni voluptatum.
        </p>
      </div>
    </div>
  );
};

export default Cards;
