import * as React from "react";
import { Button } from "netero-ui";
import { Table, Divider, Tag } from "antd";

export class Buttons extends React.Component {
  private onClick = () => {
    return;
  };
  public render() {
    return (
      <div>
        <Button type="Primary" onClick={this.onClick}>
          Hello
        </Button>

        <div />
      </div>
    );
  }
}
