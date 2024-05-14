import React from "react";
import Button from "./Components/Button";
import DropDown from "./Components/DropDown";
import "./App.css";
import Navbar from "./Components/Navbar";
import Lists from "./Components/List";
import Pagination from "./Components/Paginations";
import Cards from "./Components/Cards";
import FormModal from "./Components/FormModal";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
import SimpleSlider from "./Components/Slider/slider";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="btn-heading">Buttons</h1>
        <div className="btn-wrapper">
          <div className="btn-container">
            <Button className={"btn-gray"} title={"NORMAL"} />
            <Button className={" btn-gray btn-gray-hover"} title={"HOVER"} />
            <Button className={"btn-gray"} title={"PRESSED"} />
          </div>
          <div className="btn-container">
            <Button className={"btn-blue"} title={"NORMAL"} />
            <Button className={"btn-blue btn-blue-hover"} title={"HOVER"} />
            <Button className={"btn-blue"} title={"PRESSED"} />
          </div>
          <div className="btn-container">
            <Button className={"btn-red"} title={"NORMAL"} />
            <Button className={"btn-red btn-red-hover"} title={"HOVER"} />
            <Button className={"btn-red"} title={"PRESSED"} />
          </div>
        </div>
        <h1 className="title">Drop Down</h1>
        <div>
          <DropDown className={"red-dropdown"} />
          <DropDown className={"primary-dropdown"} />
          <DropDown className={"success-dropdown"} />
          <DropDown className={"warn-dropdown"} />
        </div>
        <h1 className="title">Lists</h1>
        <Lists />
        <div>
          <h3 className="title">Paginations</h3>
          <Pagination />
        </div>
        <h3>Cards</h3>
        <Cards />
        <h3 className="title">Forms Modals</h3>
        <FormModal />
        <h3 className="title">Pricing</h3>
        <Pricing />
        <SimpleSlider />

        <h3>Footer</h3>
        <Footer />
      </div>
    </>
  );
};

export default App;
