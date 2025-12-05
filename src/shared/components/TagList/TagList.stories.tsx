import { BadgeProps } from "../Badge/Badge.type";
import TagList from "./TagList";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: TagList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        // 컴포넌트 전체 설명 (Docs 탭 상단에 표시)
        component: `
TagList는 여러 개의 Badge를 수평으로 나열하여 태그 목록을 보여주는 컴포넌트입니다.
- 각 태그는 \`content(필수)\`, \`variant(solid / border)\`, \`color\` 등을 지정할 수 있습니다.
        `,
      },
    },
  },
} satisfies Meta<typeof TagList>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tags: [
      {
        content: "JavaScript",
        variant: "solid",
        color: "orange",
      } as BadgeProps,
      { content: "TypeScript", variant: "solid", color: "blue" } as BadgeProps,
      { content: "Java", variant: "border", color: "blue" } as BadgeProps,
    ],
  },
};

export const Example: Story = {
  args: {
    tags: [
      {
        content: "JavaScript",
        variant: "solid",
        color: "orange",
      } as BadgeProps,
      { content: "TypeScript", variant: "solid", color: "blue" } as BadgeProps,
      { content: "Java", variant: "border", color: "blue" } as BadgeProps,
    ],
  },

  render: (args) => {
    return (
      <div className="flex h-40 w-52 rounded-md bg-gray-100 p-4">
        <TagList tags={args.tags} />
      </div>
    );
  },
};
