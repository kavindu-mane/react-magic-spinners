import type { Meta, StoryObj } from "@storybook/react";
import { FadeLoader } from "..";

const meta = {
  title: "FadeLoader",
  component: FadeLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FadeLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
