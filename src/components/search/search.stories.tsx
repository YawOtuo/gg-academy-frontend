import { Meta, StoryObj } from '@storybook/react';
import Search from '.';  // Adjust the path based on where your component is located

// Define metadata for the story
const meta: Meta<typeof Search> = {
  tags: ["autodocs"],
  title: 'Components/Search',  // The name shown in Storybook sidebar
  component: Search,
  argTypes: {
    // You can control props if necessary (though Search doesn't use props now)
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

// Create a default story
export const Default: Story = {};

// You can add more variants or dynamic props if the component evolves
