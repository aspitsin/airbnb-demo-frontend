import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main.js";
import HomesPage from "./HomesPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Main} />
          <Route path="/homes" component={HomesPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
