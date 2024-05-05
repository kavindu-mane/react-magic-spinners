import type { Meta, StoryObj } from "@storybook/react";
import { ClockLoader } from "..";

const meta = {
  title: "ClockLoader",
  component: ClockLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ClockLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
