import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { PropTable } from "./PropTable";
import { findComponentData } from "../findComponentData";
import { componentData } from "../../data/componentData";

interface ICodeExample {
  code: string;
  scope: object;
  componentName: string;
}

export class CodeExample extends React.Component<ICodeExample> {
  public render() {
    const data = findComponentData(componentData, this.props
      .componentName as string);

    return (
      <div
        style={{
          position: "relative",
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "start"
        }}
      >
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

        <PropTable data={data} componentName={this.props.componentName} />
      </div>
    );
  }
}
