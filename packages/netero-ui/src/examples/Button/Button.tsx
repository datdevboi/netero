import * as React from "react";
import { Button } from "../../components/Button/Button";

class ButtonExample extends React.Component {
  render() {
    return <Button onClick={() => false}>Hello</Button>;
  }
}
