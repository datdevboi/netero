import * as React from "react";
import { Menu } from "antd";
import { extractComponentNames } from "../utils/extractComponentNames";
import { componentData } from "../data/componentData";
import { Link } from "react-router-dom";

export class MenuItems extends React.Component {
  private renderItems = () => {
    const componentNames = extractComponentNames(componentData);

    return componentNames.map((name: string, i: any) => {
      return (
        <Menu.Item key={i}>
          <Link to={`/${name.toLowerCase()}`}>{name}</Link>
        </Menu.Item>
      );
    });
  };
  public render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {this.renderItems()}
      </Menu>
    );
  }
}
