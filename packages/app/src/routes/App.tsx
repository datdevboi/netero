import * as React from "react";
import { MainLayout } from "../components/MainLayout";
import { Route, Switch } from "react-router-dom";
import { Buttons } from "./Buttons";
// import { Inputs } from "./Inputs";
// import { Cards } from "./Cards";

export const App = () => (
  <MainLayout>
    <Switch>
      <Route exact={true} path="/button" component={Buttons} />
      {/* <Route exact={true} path="/input" component={Inputs} />
      <Route exact={true} path="/card" component={Cards} /> */}
    </Switch>
  </MainLayout>
);
