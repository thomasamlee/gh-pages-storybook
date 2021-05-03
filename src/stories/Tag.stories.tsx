import React from "react";
import { Story, Meta } from "@storybook/react";
import { Tag } from "antd";
import { TagProps } from "antd/lib/tag";

const meta: Meta = {
  title: "Ant Design/Tag",
  component: Tag,
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
    color: {
      table: {
        disable: true,
      },
    },
    style: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const New = Template.bind({});
New.args = {
  children: "New",
  color: "blue",
  style: { borderRadius: 4, color: "#082746" },
};

export const Marketing = Template.bind({});
Marketing.args = {
  children: "Marketing",
  color: "geekblue",
  style: { borderRadius: 4, color: "#082746" },
};

export const Engaged = Template.bind({});
Engaged.args = {
  children: "Engaged",
  color: "green",
  style: { borderRadius: 4, color: "#082746" },
};

export const Active = Template.bind({});
Active.args = {
  children: "Active",
  color: "gold",
  style: { borderRadius: 4, color: "#082746" },
};

export const Pending = Template.bind({});
Pending.args = {
  children: "Pending",
  color: "volcano",
  style: { borderRadius: 4, color: "#082746" },
};

export const Sold = Template.bind({});
Sold.args = {
  children: "Sold",
  color: "red",
  style: { borderRadius: 4, color: "#082746" },
};

export const Cold = Template.bind({});
Cold.args = {
  children: "Cold",
  color: "cyan",
  style: { borderRadius: 4, color: "#082746", background: "#fff" },
};
export const Archived = Template.bind({});
Archived.args = {
  children: "Archived",
  color: "magenta",
  style: { borderRadius: 4, color: "#082746", background: "#fff" },
};

export const Buyer = Template.bind({});
Buyer.args = {
  children: "Buyer",
  color: "blue",
  style: { borderRadius: 5, background: "#fff" },
};

export const Seller = Template.bind({});
Seller.args = {
  children: "Seller",
  color: "purple",
  style: { borderRadius: 5, background: "#fff" },
};

export const BuyerSeller = Template.bind({});
BuyerSeller.args = {
  children: "Buyer/Seller",
  color: "green",
  style: { borderRadius: 5, background: "#fff" },
};

export const Vendor = Template.bind({});
Vendor.args = {
  children: "Vendor",
  color: "orange",
  style: { borderRadius: 5, background: "#fff" },
};

export const Personal = Template.bind({});
Personal.args = {
  children: "Personal",
  color: "gold",
  style: { borderRadius: 5, background: "#fff" },
};

export const PastClient = Template.bind({});
PastClient.args = {
  children: "Past Client",
  color: "cyan",
  style: { borderRadius: 5, background: "#fff" },
};

export const Renter = Template.bind({});
Renter.args = {
  children: "Renter",
  color: "red",
  style: { borderRadius: 5, background: "#fff" },
};

export default meta;
