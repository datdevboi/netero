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
      <Button type="Primary" onClick={this.onClick}>
        Primary
      </Button>
      <Button type="Info" onClick={this.onClick}>
        Info
      </Button>
      <Button type="Success" onClick={this.onClick}>
        Success
      </Button>
      <Button type="Danger" onClick={this.onClick}>
        Danger
      </Button>
      <Button type="Warning" onClick={this.onClick}>
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
