import type { Meta, StoryObj } from "@storybook/react-vite";
import LectureCard from "./LectureCard";
import ThumbnailImage from "./assets/thumbnail.png";

const meta = {
  component: LectureCard,
  tags: ["autodocs"],
} satisfies Meta<typeof LectureCard>;
export default meta;

type Stroy = StoryObj<typeof meta>;

export const Primary: Stroy = {
  args: {
    size: "large",
    title: "Lecture Card qfwef qwef",
    subtitle:
      "Lecture Card Subtitle fqwefqwefq wfeqwf qwefeqw fqewfewq fweqfweqrqwe rweqtgwqhwqwefawefwa fwefqwe fweqf ewqfewrweq rewqfwe",
    imageUrl: ThumbnailImage,
    tags: [
      { content: "Tag1", color: "green", variant: "solid" },
      { content: "Tag2", color: "blue", variant: "solid" },
      { content: "Tag3", color: "purple", variant: "solid" },
      { content: "Tag4", color: "orange", variant: "solid" },
    ],
  },
};
