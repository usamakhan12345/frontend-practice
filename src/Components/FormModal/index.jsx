import React from "react";
import "./style.css";
import Button from "../Button";
const FormModal = () => {
  return (
    <div className="modal-container">
      <h3>Contact</h3>
      <p>
        Feel free to contact us for any issue you might have with our products
      </p>
      <div className="form-container">
        <div className="input-container">
          <label>Name</label>
          <input placeholder="Name" type="text" />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input placeholder="Email" type="text" />
        </div>
      </div>
      <div className="message-container">
        <label>Message</label>
        <textarea></textarea>
      </div>
      <div className="btn-container">
        <Button className={"btn-close"} title={"Close"} />
        <Button className={"btn-send"} title={"Send"} />
      </div>
    </div>
  );
};

export default FormModal;
