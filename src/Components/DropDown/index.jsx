import React from "react";
import "./styles.css";

const DropDown = ({ className, title }) => {
  return (
    <>
      <select className={`dropDown ${className} `}>
        <option className="options" value="test">
          {title ?? "Default"}
        </option>
        <option value="test">DEFAULT</option>
        <option value="test">PRIMARY</option>
        <option value="test">SUCCESS</option>
      </select>
    </>
  );
};

export default DropDown;
