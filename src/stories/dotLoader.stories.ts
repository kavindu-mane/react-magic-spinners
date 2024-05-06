import type { Meta, StoryObj } from "@storybook/react";
import { DotLoader } from "..";

const meta = {
  title: "DotLoader",
  component: DotLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DotLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
