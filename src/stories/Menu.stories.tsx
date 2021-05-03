import React from "react";
import { Story, Meta } from "@storybook/react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd/lib/menu";

const meta: Meta = {
  title: "Ant Design/Menu",
  component: Menu,
  argTypes: {
    mode: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 256 }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Nav = Template.bind({});
Nav.args = {
  mode: "inline",
  inlineCollapsed: false,
  children: (
    <>
      <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.ItemGroup key="g1" title="Item 1">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="Item 2">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="sub2"
        icon={<AppstoreOutlined />}
        title="Navigation Two"
      >
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu
        key="sub4"
        icon={<SettingOutlined />}
        title="Navigation Three"
      >
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </Menu.SubMenu>
    </>
  ),
};

export default meta;
