import { Meta, StoryObj } from "@storybook/react";
import StudentListCard from ".";

const meta: Meta<typeof StudentListCard> = {
  title: "Components/StudentListCard",
  component: StudentListCard,
  tags: ["autodocs"],

  argTypes: {
    // name: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof StudentListCard>;

export const Default: Story = {
  args: {
    // name: "John Doe",
  },
};
