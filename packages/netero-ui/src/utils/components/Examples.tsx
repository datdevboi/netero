import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

interface IExamples {
  scope: any;
  code: string;
  name: string;
}

export class Examples extends React.Component<IExamples> {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <LiveProvider
          scope={this.props.scope}
          code={this.props.code}
          style={{ marginBottom: "50px" }}
        >
          <div style={{ marginBottom: "25px" }}>
            <LivePreview />
          </div>

          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }
}
