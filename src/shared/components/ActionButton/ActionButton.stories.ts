import type { Meta, StoryObj } from "@storybook/react-vite";
import ActionButton from "./ActionButton";

const meta = {
  component: ActionButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ActionButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    value: "Primary Button",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    value: "Secondary Button",
  },
};
export const None: Story = {
  args: {
    variant: "none",
    size: "medium",
    value: "None Style Button",
  },
};
