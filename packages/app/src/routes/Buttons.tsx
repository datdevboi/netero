import * as React from "react";
import { Button } from "netero-ui";

import { Table } from "antd";
import { extractPropData } from "../utils/extractPropData";
import { componentData } from "../data/componentData";

const ButtonData = componentData.filter(x => x.name === "Button")[0].data.props;

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

const data = extractPropData(ButtonData);
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

        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
