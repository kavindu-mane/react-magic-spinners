import type { Meta, StoryObj } from "@storybook/react";
import { ClipLoader } from "..";

const meta = {
  title: "ClipLoader",
  component: ClipLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ClipLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
