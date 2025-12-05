import TextField from "./TextField";
import { Meta } from "@storybook/react";

const meta = {
  component: TextField,
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;
export default meta;

export const SemiBold_Title = {
  args: {
    label: "TextField Component",
    variant: "title",
    style: "semibold",
  },
};

export const Regular_Title = {
  args: {
    label: "TextField Component",
    variant: "title",
    style: "regular",
  },
};

export const SemiBold_Heading = {
  args: {
    label: "TextField Component",
    variant: "heading",
    style: "semibold",
  },
};

export const Regular_Heading = {
  args: {
    label: "TextField Component",
    variant: "heading",
    style: "regular",
  },
};

export const SemiBold_Body = {
  args: {
    label: "TextField Component",
    variant: "body",
    style: "semibold",
  },
};

export const Regular_Body = {
  args: {
    label: "TextField Component",
    variant: "body",
    style: "regular",
  },
};

export const SemiBold_Caption = {
  args: {
    label: "TextField Component",
    variant: "caption",
    style: "semibold",
  },
};

export const Regular_Caption = {
  args: {
    label: "TextField Component",
    variant: "caption",
    style: "regular",
  },
};
