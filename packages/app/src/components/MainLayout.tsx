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
          <MenuItems />
        </Sider>
        <Layout>
          <Header
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              background: "#fff",
              padding: 5,
              fontSize: "1.2rem"
            }}
          >
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
              style={{ flexGrow: 1, textAlign: "left" }}
            />
            <a href="https://github.com/datdevboi/netero">
              <Icon type="github" />
            </a>
          </Header>
          <Content
            style={{
              background: "#fff",
              margin: "24px 16px",
              padding: 24,
              height: "100%",
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
