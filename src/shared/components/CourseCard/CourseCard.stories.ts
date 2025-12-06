import type { Meta, StoryObj } from "@storybook/react-vite";
import CourseCard from "./CourseCard";
import ThumbnailImage from "./assets/thumbnail.png";

const meta = {
  component: CourseCard,
  tags: ["autodocs"],
} satisfies Meta<typeof CourseCard>;
export default meta;

type Stroy = StoryObj<typeof meta>;

export const Primary: Stroy = {
  args: {
    courseId: 0,
    size: "large",
    title: "Course Card qfwef qwef",
    subtitle:
      "Course Card Subtitle fqwefqwefq wfeqwf qwefeqw fqewfewq fweqfweqrqwe rweqtgwqhwqwefawefwa fwefqwe fweqf ewqfewrweq rewqfwe",
    thumbnailImageUrl: ThumbnailImage,
    tags: [
      { content: "Tag1", color: "green", variant: "solid" },
      { content: "Tag2", color: "blue", variant: "solid" },
      { content: "Tag3", color: "purple", variant: "solid" },
      { content: "Tag4", color: "orange", variant: "solid" },
    ],
  },
};
