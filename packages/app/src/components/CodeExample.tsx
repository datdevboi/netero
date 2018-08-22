import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { PropTable } from "./PropTable";

interface ICodeExample {
  code: string;
  scope: object;
  name: string;
}

export class CodeExample extends React.Component<ICodeExample> {
  public render() {
    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <LiveProvider scope={this.props.scope} code={this.props.code}>
          <div style={{ marginBottom: "25px" }}>
            <LivePreview />
          </div>

          <LiveEditor />
          <LiveError />
        </LiveProvider>

        <PropTable name={this.props.name} />
      </div>
    );
  }
}
