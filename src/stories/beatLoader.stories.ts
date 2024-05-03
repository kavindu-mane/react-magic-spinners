import type { Meta, StoryObj } from "@storybook/react";
import { BeatLoader } from "..";

const meta = {
  title: "BeatLoader",
  component: BeatLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BeatLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
