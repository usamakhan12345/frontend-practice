import React from "react";
import "./style.css";
const Button = ({ title, className, onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {title}
    </button>
  );
};

export default Button;
