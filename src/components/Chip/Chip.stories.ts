import type { Meta, StoryObj } from "@storybook/react-vite";
import Chip from "./Chip.tsx";

const meta = {
  component: Chip,
} satisfies Meta<typeof Chip>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "solid",
    color: "blue",
    content: "개발",
  },
};
