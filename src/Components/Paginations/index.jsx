import React from "react";
import "./style.css";
import Button from "../Button";
const Pagination = () => {
  return (
    <div>
      <>
        <Button className={"btn-prev"} title={"PREV"} />
        <Button className={"btn-count"} title={"1"} />
        <Button className={"btn-count"} title={"2"} />
        <Button className={"btn-count"} title={"3"} />
        <Button className={"btn-count"} title={"4"} />
        <Button className={"btn-next"} title={"NEXT"} />
      </>
    </div>
  );
};

export default Pagination;
