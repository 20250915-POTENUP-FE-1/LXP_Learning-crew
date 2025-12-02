import type { Meta, StoryObj } from "@storybook/react-vite";
import Thumbnail from "./Thumbnail";
import ThumbnailImage from "./assets/thumbnail.png";

const meta = {
  component: Thumbnail,
  tags: ["autodocs"],
} satisfies Meta<typeof Thumbnail>;
export default meta;

export type Story = StoryObj<typeof meta>;

export const Image_Medium: Story = {
  args: {
    title: "Thumbnail Image",
    imageUrl: ThumbnailImage,
    size: "medium",
  },
};

export const Image_Large: Story = {
  args: {
    title: "Thumbnail Image",
    imageUrl: ThumbnailImage,
    size: "large",
  },
};

export const Placeholder_Medium: Story = {
  args: {
    title: "Thumbnail Image",
    size: "medium",
  },
};

export const Placeholder_Large: Story = {
  args: {
    title: "Thumbnail Image",
    size: "large",
  },
};

export const Loading_Medium: Story = {
  args: {
    title: "Thumbnail Image",
    size: "medium",
    variant: "loading",
  },
};

export const Loading_large: Story = {
  args: {
    title: "Thumbnail Image",
    size: "large",
    variant: "loading",
  },
};
