import type { Meta, StoryObj } from "@storybook/react-vite";
import ActionButton from "./ActionButton.js";

const meta = {
  component: ActionButton,
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
