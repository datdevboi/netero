import * as React from "react";
import { Table } from "../../components/Table/Table";
import { findComponentData } from "../findComponentData";
import { componentData } from "../../data/componentData";

interface IPropTable {
  componentName: string;
  data: any;
}

const propKeys = ["name", "description", "defaultValue", "required", "type"];

export class PropTable extends React.Component<IPropTable> {
  renderRows = () => {
    const dataKeys = Object.keys(this.props.data);

    return dataKeys.map((key: any, index: number) => (
      <Table.Row key={index}>
        <Table.Data>{this.props.data[key].name}</Table.Data>
        <Table.Data>{this.props.data[key].description}</Table.Data>
        <Table.Data>
          {this.props.data[key].defaultValue
            ? this.props.data[key].defaultValue.value
            : ""}
        </Table.Data>
        <Table.Data>
          {this.props.data[key].required ? "true" : "false"}
        </Table.Data>
        <Table.Data>{this.props.data[key].type.name}</Table.Data>
      </Table.Row>
    ));
  };
  render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            {propKeys.map((propKey, index) => {
              return <Table.Head key={index}>{propKey}</Table.Head>;
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body>{this.renderRows()}</Table.Body>
      </Table>
    );
  }
}
