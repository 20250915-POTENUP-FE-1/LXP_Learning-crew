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
    userName: {
      control: "text",
      description: "{name} 변수를 대체할 사용자 이름",
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
    userName: "김준호",
  },
};

/**
 * 커스텀 메시지
 */
export const CustomMessage: Story = {
  args: {
    message: "환영합니다! {name}님과 함께 학습을 시작해보세요.",
    userName: "이순신",
  },
};

/**
 * 긴 사용자 이름
 */
export const LongUserName: Story = {
  args: {
    message: "안녕하세요 {name}님! 새로운 강의를 확인해보세요.",
    userName: "김준호최민영이수영박진수",
  },
};

/**
 * 인터랙티브 예제
 */
export const Interactive: Story = {
  args: {
    message: "안녕하세요 🥳 {name}님 새로운 강의를 등록해보세요",
    userName: "박진수",
    onClick: () => alert("온보딩 메시지를 클릭했습니다!"),
  },
};
