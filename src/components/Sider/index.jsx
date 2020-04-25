import React, { Component } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu, Item } = Menu;

export default class Sider extends Component {
  state = {
    theme: "dark",
    current: "1",
  };
  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <Item
            key="sub1"
          >
            <MailOutlined />Navigation One
          </Item>
          <Item 
            key="sub2"
          >
            <AppstoreOutlined />Navigation One
          </Item>
          <Item><SettingOutlined />Navigation One</Item>
          <Item><MailOutlined />Navigation One</Item>
          <Item><MailOutlined />Navigation One</Item>
          <Item><MailOutlined />Navigation One</Item>
          <Item><MailOutlined />Navigation One</Item>
          <Item><MailOutlined />Navigation One</Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>Navigation One</span>
              </span>
            }
          >
           
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <AppstoreOutlined />
                <span>Navigation Two</span>
              </span>
            }
          >
            
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <SettingOutlined />
                <span>Navigation Three</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
