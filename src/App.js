import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import HomesPage from "./HomesPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/homes" component={HomesPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
