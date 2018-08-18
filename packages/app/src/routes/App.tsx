import * as React from "react";
import { MainLayout } from "../components/MainLayout";
import { Route, Switch } from "react-router-dom";
import { Button } from "netero-ui";

const Hello = () => (
  <div>
    <Button type="Primary" size="md">
      Hello World
    </Button>
  </div>
);
export const App = () => (
  <MainLayout>
    <Switch>
      <Route exact={true} path="/" component={Hello} />
    </Switch>
  </MainLayout>
);
