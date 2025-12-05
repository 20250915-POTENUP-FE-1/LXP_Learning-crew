import InformationCard from "./InformationCard";
import { Meta } from "@storybook/react";

const meta = {
  component: InformationCard,
  tags: ["autodocs"],
} satisfies Meta<typeof InformationCard>;
export default meta;

export const Default = {
  args: {
    title: "정보 카드",
    description: "이것은 정보 카드를 나타내는 컴포넌트입니다.",
  },
};

export const FillStyle = {
  args: {
    title: "정보 카드",
    description: "이것은 정보 카드를 나타내는 컴포넌트입니다.",
    style: "fill",
  },
};
