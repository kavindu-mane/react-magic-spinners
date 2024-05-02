import type { Meta, StoryObj } from "@storybook/react";
import { GridLoader } from "..";

const meta = {
  title: "GridLoader",
  component: GridLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GridLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
