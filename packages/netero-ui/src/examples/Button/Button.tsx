import * as React from "react";
import { Button } from "../../components/Button/Button";

class BasicButton extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={() => false}>Hello</Button>
      </div>
    );
  }
}
