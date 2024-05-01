import type { Meta, StoryObj } from "@storybook/react";
import { Writer } from "..";

const meta = {
  title: "Writer",
  component: Writer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Writer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { text: "Welcome" },
};
