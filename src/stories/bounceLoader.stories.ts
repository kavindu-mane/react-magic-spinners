import type { Meta, StoryObj } from "@storybook/react";
import { BounceLoader } from "..";

const meta = {
  title: "BounceLoader",
  component: BounceLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BounceLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
