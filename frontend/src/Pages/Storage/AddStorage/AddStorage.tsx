import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./AddStorage.css";
import add from "../../../Assets/add_circle_outline_white_24dp.svg";

export default function AddStorage() {
  return (
    <Popup
      trigger={
        <div className="add-button">
          <button className="default-button">
            <img src={add} alt="Add Storage"></img>
            <span>Add Storage</span>
          </button>
        </div>
      }
      
      position="right center"
      modal
      nested
    >
      <div className="default-popup">
        <div className="popup-title">Add Storage</div>
        <form>
            <div className="form-group">
                <label htmlFor="item-name">Name</label>
                <input type="email" className="form-control" id="item-name" aria-describedby="emailHelp" placeholder="Storage Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="image-upload">Image</label>
                <br></br>
                <input type="file" className="form-control-file" id="image-upload"></input>
            </div>
            
            <div className="popup-options">
                <button type="submit" className="default-button">Save</button>
            </div>

        </form>
      </div>
    </Popup>
  );
}
