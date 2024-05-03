import type { Meta, StoryObj } from "@storybook/react";
import { ClimbingBoxLoader } from "..";

const meta = {
  title: "ClimbingBoxLoader",
  component: ClimbingBoxLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ClimbingBoxLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
