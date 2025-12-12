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

export const Width: Story = {
  args: {
    variant: "primary",
    size: "medium",
    width: 500,
    value: "Button Width",
  },
};

export const FullWidth: Story = {
  args: {
    variant: "primary",
    size: "medium",
    isFull: true,
    value: "Full Width Button",
  },
};
