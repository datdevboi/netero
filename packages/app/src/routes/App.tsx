import * as React from "react";
import { MainLayout } from "../components/MainLayout";
import { Route, Switch } from "react-router-dom";
import { Buttons } from "./Buttons";

export const App = () => (
  <MainLayout>
    <Switch>
      <Route exact={true} path="/button" component={Buttons} />
    </Switch>
  </MainLayout>
);
