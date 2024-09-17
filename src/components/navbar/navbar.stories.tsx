import { Meta, StoryObj } from "@storybook/react";
import Navbar from ".";

// Define metadata for the story
const meta: Meta<typeof Navbar> = {
  tags: ["autodocs"],

  title: "Components/Navbar", // The name shown in Storybook sidebar
  component: Navbar,
  argTypes: {
    // You can control any prop here (if Navbar had any props)
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// Create a default story
export const Default: Story = {};

// You can add more variants if necessary
