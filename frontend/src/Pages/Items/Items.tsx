import React, { useState } from "react";
import "./Items.css";
import mug from '../../Assets/mug.jpg'
import search from '../../Assets/search_white_24dp.svg'

export default function Items() {
  const [items, ] = useState<Array<number>>([1, 2, 3, 4, 5, 6]);

  return (
    <div className=".d-flex w-100">
      
      <div className="search-container d-flex w-100">
        <div className="input-group mb-3 item-search">
            <input type="text" className="form-control" placeholder="Item's name" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button"><img src={search} alt="search"></img></button>
            </div>
        </div>
      </div>

      <li className=".d-inline-flex items">
        {items.map(function (n) {
          return (
            <ul key={n} className="p-2 item-card">
              <img src={mug} className="App-logo" alt="item_img"/>
              <span>White Mug</span>
            </ul>
          );
        })}

      </li>
    </div>
  );
}
