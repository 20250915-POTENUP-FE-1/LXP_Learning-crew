import type { Meta, StoryObj } from "@storybook/react-vite";
import InputField from "./InputField";

const meta = {
  component: InputField,
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    defaultValue: "Input value",
    placeholder: "placeholer",
    title: "Input Title",
    variant: "primary",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "Input value",
    placeholder: "placeholer",
    title: "Input Title",
    variant: "disabled",
  },
};

export const Black: Story = {
  args: {
    defaultValue: "Input value",
    placeholder: "placeholer",
    title: "Input Title",
    variant: "black",
  },
};
