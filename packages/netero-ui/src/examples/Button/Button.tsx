import * as React from "react";
import { Button } from "../../components/Button/Button";

class BasicButton extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={() => false}>Primary</Button>
        <Button btnType="Success" onClick={() => false}>
          Success
        </Button>
        <Button btnType="Info" onClick={() => false}>
          Info
        </Button>
        <Button btnType="Warning" onClick={() => false}>
          Warning
        </Button>
        <Button btnType="Danger" onClick={() => false}>
          Danger
        </Button>
      </div>
    );
  }
}
