import React, { useState } from "react";
import "./Storage.css";
import AddStorage from "../AddStorage/AddStorage";  
import storage from "../../../Assets/storage.jpg"
import Star from "../../../Assets/star_white_24dp.svg"
// import map from "../../../Assets/map.png"

export default function Storage() {
  const [items] = useState<Array<number>>([1, 2, 3]);

  return (
      <div className="storage-index">
        <div className="storage-listing">
          {items.map((i) => {
            return <div key={i} className="storage-announcement">
              <div className="storage-image-container">
                <img src={storage} alt="storage"></img>
              </div>
              <div className="storage-announcement-info"> 
                <div>South Wing Storage</div>
                <div>Via L2 Sul, 233</div>
                <div>Rating:
                  {items.map((itens) => {
                    return <img key={itens} src={Star} alt={"star"}></img>
                  })}
                </div>
              </div>
              
            </div>
          })}
          <AddStorage></AddStorage>
        </div>
      </div>
  );
}
