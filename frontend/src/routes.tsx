import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Items from "./Pages/Items/Items";

export default function Routes() {
  return (
    <Router>
      <div>
        <div id="main-container">
          <Header></Header>

          {/* A <Switch> looks through its children <Route>s ands
            renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/storages">
              <Items />
            </Route>

            <Route path="/items">
              <Items />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
