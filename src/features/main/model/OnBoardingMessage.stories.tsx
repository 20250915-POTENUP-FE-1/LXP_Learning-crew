import type { Meta, StoryObj } from "@storybook/react";
import OnBoardingMessage from "../ui/OnBoardingMessage";

const meta = {
  title: "Features/Main/OnBoardingMessage",
  component: OnBoardingMessage,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: "text",
      description: "표시할 온보딩 메시지 내용 ({name} 변수 포함 가능)",
    },
    onClick: {
      action: "clicked",
      description: "메시지 클릭 시 실행될 콜백 함수",
    },
  },
} satisfies Meta<typeof OnBoardingMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 온보딩 메시지
 */
export const Default: Story = {
  args: {
    message: "안녕하세요 🥳 {name}님 새로운 강의를 등록해보세요",
  },
};

/**
 * 커스텀 메시지
 */
export const CustomMessage: Story = {
  args: {
    message: "환영합니다! {name}님과 함께 학습을 시작해보세요.",
  },
};

/**
 * 긴 사용자 이름
 */
export const LongUserName: Story = {
  args: {
    message: "안녕하세요 {name}님! 새로운 강의를 확인해보세요.",
  },
};

/**
 * 인터랙티브 예제
 */
export const Interactive: Story = {
  args: {
    message: "안녕하세요 🥳 {name}님 새로운 강의를 등록해보세요",
    onClick: () => alert("온보딩 메시지를 클릭했습니다!"),
  },
};
