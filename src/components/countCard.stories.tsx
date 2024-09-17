// CountCard.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import CountCard from "./countCard";

const meta: Meta<typeof CountCard> = {
  title: "Components/CountCard",
  tags: ["autodocs"],
  component: CountCard,
  argTypes: {
    title: { control: "text" },
    count: { control: "number" },
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CountCard>;

export const Default: Story = {
  args: {
    title: "Tasks Completed",
    count: 10,
  },
};

export const LargeCount: Story = {
  args: {
    title: "Users Registered",
    count: 1050,
  },
};

export const NoCount: Story = {
  args: {
    title: "Items Sold",
    count: 0,
  },
};

export const LongTitle: Story = {
  args: {
    title: "Items that have been processed through the system today",
    count: 245,
  },
};
