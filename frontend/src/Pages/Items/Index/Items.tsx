import React, { useState, useEffect} from "react";
import "./Items.css";
import mug from '../../../Assets/mug.jpg'
import search from '../../../Assets/search_white_24dp.svg'

import AddItem from "../AddItem/AddItem";
import api from "../../../Server/api"

export default function Items() {
  useEffect(() => getItems())
  const [items, setItens] = useState<Array<number>>([1, 2, 3, 4, 5, 6]);
  

  function getItems(){
    api.get("/user").then(resp => {
      console.log(resp.data);
    });
  }


  return (
    <div className="align-items-center">
      
      <div className="search-container d-flex">
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
              <small>South Wing Storage</small>
            </ul>
          );
        })}

      </li>

      <AddItem></AddItem>
      </div>
  );
}
