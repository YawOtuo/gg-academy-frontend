import { Meta, StoryObj } from "@storybook/react";
import StudentListCard from "./studentListCard";

const meta: Meta<typeof StudentListCard> = {
  title: "Components/StudentListCard",
  component: StudentListCard,
  tags: ["autodocs"],

  argTypes: {
    name: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof StudentListCard>;

export const Default: Story = {
  args: {
    name: "John Doe",
  },
};

export const LongName: Story = {
  args: {
    name: "Alexandria Catherine Montgomery",
  },
};

export const ShortName: Story = {
  args: {
    name: "Amy",
  },
};

export const EmptyName: Story = {
  args: {
    name: "",
  },
};
