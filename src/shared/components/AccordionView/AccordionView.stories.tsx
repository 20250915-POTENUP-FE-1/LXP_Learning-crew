import AccordionView from "./AccordionView";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: AccordionView,
  tags: ["autodocs"],
} satisfies Meta<typeof AccordionView>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "AccordionView Title",
    description: "AccordionView Description",
    children: <div>content</div>,
  },
  render: (args) => <AccordionView {...args} />,
};

export const Widthout_Description: Story = {
  args: {
    title: "AccordionView Title",
    children: <div>content</div>,
  },
  render: (args) => <AccordionView {...args} />,
};

export const Content_Open_Default: Story = {
  args: {
    title: "AccordionView Title",
    description: "AccordionView Description",
    isOpen: true,
    children: <div>content</div>,
  },
  render: (args) => <AccordionView {...args} />,
};

export const Content_Open_Without_Description: Story = {
  args: {
    title: "AccordionView Title",
    isOpen: true,
    children: <div>content</div>,
  },
  render: (args) => <AccordionView {...args} />,
};

export const Title_With_Component: Story = {
  args: {
    title: <div style={{ color: "red" }}>Custom Title Component</div>,
    description: "AccordionView Description",
    children: <div>content</div>,
  },
  render: (args) => <AccordionView {...args} />,
};
