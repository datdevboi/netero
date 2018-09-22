import * as React from "react";
import { Button } from "netero-ui";

import { CodeExample } from "../components/CodeExample";

export class Buttons extends React.Component {
  private onClick = () => {
    return;
  };

  public render() {
    const example = `
    <div style={{ height: "100px", display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', alignItems: "end"}}>
      <Button btnType="Primary" onClick={this.onClick}>
        Primary
      </Button>
      <Button btnType="Info" onClick={this.onClick}>
        Info
      </Button>
      <Button btnType="Success" onClick={this.onClick}>
        Success
      </Button>
      <Button btnType="Danger" onClick={this.onClick}>
        Danger
      </Button>
      <Button btnType="Warning" onClick={this.onClick}>
        Warning
      </Button>
      <Button color="palevioletred" onClick={this.onClick}>
        Custom Color
      </Button>
    </div>
    `;
    return (
      <CodeExample
        code={example}
        name="Button"
        scope={{ Button, onClick: this.onClick }}
      />
    );
  }
}
