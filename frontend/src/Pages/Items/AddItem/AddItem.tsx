import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./AddItem.css";
import add from "../../../Assets/add_circle_outline_white_24dp.svg";

export default function AddItem() {
  return (
    <Popup
      trigger={
        <div className="add-button">
          <button className="default-button">
            <img src={add} alt="Add Item"></img>
            <span>Add Item</span>
          </button>
        </div>
      }
      
      position="right center"
      modal
      nested
    >
      <div className="default-popup">
        <div className="popup-title">Add Item</div>
        <form>
            <div className="form-group">
                <label htmlFor="item-name">Name</label>
                <input type="email" className="form-control" id="item-name" aria-describedby="itemName" placeholder="Item Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="image-url">Image</label>
                <input type="text" className="form-control" id="image-url" aria-describedby="imageUrl" placeholder="Image Url"/>
            </div>
            
            <div className="popup-options">
                <button type="submit" className="default-button">Save</button>
            </div>

        </form>
      </div>
    </Popup>
  );
}
