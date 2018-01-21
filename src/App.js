import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
import HomesPage from "./HomesPage";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={Main} />
          <Route path="/homes" component={HomesPage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
