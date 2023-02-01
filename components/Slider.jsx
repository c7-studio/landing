import React from "react";
import { SliderData } from "./SliderData";

const Slider = ({ slides }) => {
  return (
    <div>
      <h1>Our services</h1>
      <div>
        {SliderData.map((slide, index) => {
          return <Image src={slide.image} alt="/" />;
        })}
      </div>
    </div>
  );
};

export default Slider;
