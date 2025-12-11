import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import ComboBox from "./ComboBox";

const sampleOptions = [
  { label: "최신 순", value: "latest" },
  { label: "인기 순", value: "popular" },
  { label: "난이도 낮은 순", value: "easy" },
  { label: "난이도 높은 순", value: "hard" },
];

const meta = {
  component: ComboBox,
  tags: ["autodocs"],
  args: {
    options: sampleOptions,
  },
} satisfies Meta<typeof ComboBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "정렬",
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "latest",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("popular");

    return (
      <div className="w-32">
        <ComboBox
          {...args}
          value={value}
          onChange={(option) => setValue(option.value)}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "선택 불가",
  },
};
