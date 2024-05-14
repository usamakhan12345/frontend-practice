import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Button from "../Button";
import { useRef } from "react";
import TestImage from "../../assets/test img.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <Button className={"NextBtn"} onClick={onClick} title={"Next"} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <Button className={"prevBtn"} onClick={onClick} title={"Prev"} />
    </>
  );
}

export default function SimpleSlider() {
  const totalSlides = 5;
  const handleBeforeChange = (prev, next) => {
    console.log("prev->", prev);
    console.log("next->", next);
    const currentSlideNumnber = totalSlides - (next + 1);
    console.log("currentSlideNumnber", currentSlideNumnber);
  };
  var settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow className={"prevBtn"} />,
  };
  const sliderRef = useRef();
  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        <div className="slider-item">
          <h3>1</h3>
          <img src={TestImage} alt="" />
        </div>
        <div className="slider-item2">
          <h3>2</h3>
          <img src={TestImage} alt="" />
        </div>
        <div className="slider-item">
          <h3>3</h3>
          <img src={TestImage} alt="" />
        </div>
        <div className="slider-item">
          <h3>4</h3>
          <img src={TestImage} alt="" />
        </div>
        <div className="slider-item">
          <h3>5</h3>
          <img src={TestImage} alt="" />
        </div>
        <div className="slider-item">
          <h3>6</h3>
          <img src={TestImage} alt="" />
        </div>
      </Slider>
      <h4 className="slide-count">
        {" "}
        {4} OF {6}
      </h4>
    </>
  );
}
