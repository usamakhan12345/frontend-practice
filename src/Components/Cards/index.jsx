import React from "react";
import "./style.css";
import firstcardImage from "../../assets/gtestimg 2.jpg";
import secondcardImage from "../../assets/test img.jpg";
import Slider from "react-slick";
const Cards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="card-container">
      <div className="first-card">
        <Slider {...settings}>
          <img className="card-image" src={firstcardImage} />
          <img className="card-image" src={secondcardImage} />
          <img className="card-image" src={firstcardImage} />
        </Slider>
        <h3>Implementing a HTML AND CSS into your user interface project</h3>
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
        <h3>Implementing a HTML AND CSS into your user interface project</h3>
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
