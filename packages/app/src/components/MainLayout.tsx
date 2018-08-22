import * as React from "react";
import { Layout, Icon } from "antd";
import { MenuItems } from "./MenuItems";

const { Header, Sider, Content } = Layout;

// interface IState {
//   collapsed: boolean;
// }

export class MainLayout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  public render() {
    return (
      <Layout className="Layout">
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <MenuItems />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              background: "#fff",
              margin: "24px 16px",
              padding: 24,

              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
  private toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
}
