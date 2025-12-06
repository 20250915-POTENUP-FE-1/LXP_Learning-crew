import { Meta, StoryObj } from "@storybook/react";
import CurriculumProvider from "./CurriculumProvider";

const meta = {
  component: CurriculumProvider,
  tags: ["autodocs"],
} satisfies Meta<typeof CurriculumProvider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sections: [
      {
        sectionTitle: "Section 1",
        lectures: [
          { lectureTitle: "asdf", duration: 123 },
          { lectureTitle: "asdfsd", duration: 12313 },
        ],
      },
      {
        sectionTitle: "Section 2",
        lectures: [
          { lectureTitle: "asdfsdfsd", duration: 444 },
          { lectureTitle: "adsfvvv", duration: 123 },
          { lectureTitle: "avvvvasdvcxxx", duration: 555 },
        ],
      },
    ],
  },
};
