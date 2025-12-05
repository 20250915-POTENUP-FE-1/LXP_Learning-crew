import TextField from "./TextField";
import { Meta } from "@storybook/react";

const meta = {
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;
export default meta;

export const SemiBold_Title = {
  args: {
    children: "TextField Component",
    variant: "title",
    style: "semibold",
  },
};

export const Regular_Title = {
  args: {
    children: "TextField Component",
    variant: "title",
    style: "regular",
  },
};

export const SemiBold_Heading = {
  args: {
    children: "TextField Component",
    variant: "heading",
    style: "semibold",
  },
};

export const Regular_Heading = {
  args: {
    children: "TextField Component",
    variant: "heading",
    style: "regular",
  },
};

export const SemiBold_Body = {
  args: {
    children: "TextField Component",
    variant: "body",
    style: "semibold",
  },
};

export const Regular_Body = {
  args: {
    children: "TextField Component",
    variant: "body",
    style: "regular",
  },
};

export const SemiBold_Caption = {
  args: {
    children: "TextField Component",
    variant: "caption",
    style: "semibold",
  },
};

export const Regular_Caption = {
  args: {
    children: "TextField Component",
    variant: "caption",
    style: "regular",
  },
};
