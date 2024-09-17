import { Meta, StoryObj } from "@storybook/react";
import StudentCard from "./StudentCard";

const meta: Meta<typeof StudentCard> = {
  title: "Components/StudentCard",
  component: StudentCard,
  tags: ["autodocs"],

  argTypes: {
    name: { control: "text" },
    picture: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof StudentCard>;

export const Default: Story = {
  args: {
    name: "John Doe",
    picture: "https://via.placeholder.com/300x500.png?text=Student+Picture",
  },
};

export const LongName: Story = {
  args: {
    name: "Alexandria Catherine Montgomery",
    picture: "https://via.placeholder.com/300x500.png?text=Student+Picture",
  },
};

export const CustomImage: Story = {
  args: {
    name: "Jane Doe",
    picture: "https://example.com/your-custom-image.jpg", // Replace with an actual URL
  },
};

export const WithoutImage: Story = {
  args: {
    name: "Student Without Image",
    picture: "", // Empty picture to simulate no image available
  },
};
