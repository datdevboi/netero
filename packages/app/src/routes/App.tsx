import * as React from "react";
import { MainLayout } from "../components/MainLayout";
import { Route, Switch } from "react-router-dom";
import { Buttons } from "./Buttons";
import { Inputs } from "./Inputs";

export const App = () => (
  <MainLayout>
    <Switch>
      <Route exact={true} path="/button" component={Buttons} />
      <Route exact={true} path="/input" component={Inputs} />
    </Switch>
  </MainLayout>
);
