import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ButtonProps } from "antd/lib/button";

const meta: Meta = {
  title: "Ant Design/Button",
  component: Button,
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    type: {
      control: {
        type: "select",
        options: ["text", "link", "primary", "ghost", "default", "dashed"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["large", "middle", "small"],
      },
    },
    shape: {
      control: {
        type: "select",
        options: ["circle", "round", undefined],
      },
    },
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Continue = Template.bind({});
Continue.args = {
  children: "Continue",
  type: "primary",
  size: "large",
  danger: true,
  block: false,
  disabled: false,
  ghost: false,
  shape: undefined,
  loading: false,
};

export const Update = Template.bind({});
Update.args = {
  children: "Update",
  type: "primary",
  size: "large",
  block: true,
  danger: false,
  disabled: false,
  ghost: false,
  shape: undefined,
  loading: false,
};

export const Upload = Template.bind({});
Upload.args = {
  children: "Upload",
  type: "primary",
  size: "large",
  block: false,
  danger: false,
  disabled: false,
  ghost: false,
  shape: undefined,
  loading: false,
};

export const Cancel = Template.bind({});
Cancel.args = {
  children: "Cancel",
  type: "default",
  size: "large",
  block: false,
  danger: false,
  disabled: false,
  ghost: false,
  shape: undefined,
  loading: false,
};

export const SaveChanges = Template.bind({});
SaveChanges.args = {
  children: "Save Changes",
  type: "primary",
  size: "large",
  block: false,
  danger: false,
  disabled: false,
  ghost: false,
  shape: undefined,
  loading: false,
};

export const SaveSearch = Template.bind({});
SaveSearch.args = {
  children: "Save Search",
  type: "primary",
  size: "large",
  block: false,
  danger: true,
  disabled: false,
  ghost: false,
  shape: undefined,
  loading: false,
};

export const Saved = Template.bind({});
Saved.args = {
  children: "Saved",
  type: "primary",
  size: "large",
  block: false,
  danger: true,
  disabled: false,
  ghost: false,
  shape: undefined,
  loading: false,
};

export const CreateClient = Template.bind({});
CreateClient.args = {
  icon: <PlusOutlined />,
  children: "Create Client",
  type: "default",
  size: "large",
  block: false,
  danger: false,
  disabled: false,
  ghost: false,
  shape: undefined,
  loading: false,
};

export default meta;
