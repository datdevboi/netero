import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { PropTable } from "./PropTable";
import { findComponentData } from "../findComponentData";
import { componentData } from "../../data/componentData";
import { Examples } from "./Examples";
interface ICodeExample {
  scope: object;
  componentName: string;
}

export class CodeExample extends React.Component<ICodeExample> {
  public render() {
    const { data, examples } = findComponentData(componentData, this.props
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
        {examples.map((exampleData: { name: string; code: string }) => (
          <Examples
            code={exampleData.code}
            scope={this.props.scope}
            name={exampleData.name}
          />
        ))}
        <PropTable data={data} componentName={this.props.componentName} />
      </div>
    );
  }
}
