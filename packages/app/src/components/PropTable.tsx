import * as React from "react";
import { Table } from "antd";
import { extractPropData } from "../utils/extractPropData";
import { componentData } from "../data/componentData";
import { findComponentData } from "../utils/findComponentData";

const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Description",
    dataIndex: "description"
  },
  {
    title: "Type",
    dataIndex: "type"
  },
  {
    title: "Default",
    dataIndex: "default"
  },
  {
    title: "Required",
    dataIndex: "required"
  }
];

interface IPropTable {
  name: string;
}
export class PropTable extends React.Component<IPropTable> {
  public render() {
    const PropData = findComponentData(componentData, this.props.name);
    const data = extractPropData(PropData);

    return <Table columns={columns} dataSource={data} />;
  }
}
