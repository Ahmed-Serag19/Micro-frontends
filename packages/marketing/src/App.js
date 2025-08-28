import React from "react";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";
import { Style } from "@material-ui/icons";
const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
