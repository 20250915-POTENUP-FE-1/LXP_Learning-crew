import type { Meta, StoryObj } from "@storybook/react-vite";
import InputField from "./InputField.tsx";

const meta = {
  component: InputField,
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
