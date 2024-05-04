import type { Meta, StoryObj } from "@storybook/react";
import { CircleLoader } from "..";

const meta = {
  title: "CircleLoader",
  component: CircleLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CircleLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
