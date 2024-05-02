import type { Meta, StoryObj } from "@storybook/react";
import { BarLoader } from "..";

const meta = {
  title: "BarLoader",
  component: BarLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof BarLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
