import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "./Badge";

const meta = {
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    color: "blue",
    content: "개발",
  },
};

export const Border: Story = {
  args: {
    variant: "border",
    color: "blue",
    content: "개발",
  },
};
