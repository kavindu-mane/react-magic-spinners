import type { Meta, StoryObj } from "@storybook/react";
import { HashLoader } from "..";

const meta = {
  title: "HashLoader",
  component: HashLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HashLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
