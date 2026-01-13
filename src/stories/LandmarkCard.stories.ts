import type { Meta, StoryObj } from '@storybook/vue3';

import LandmarkCard from '../components/LandmarkCard.vue';

const meta: Meta<typeof LandmarkCard> = {
  title: 'Components/LandmarkCard',
  component: LandmarkCard,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    rating: { control: { type: 'number', min: 0, max: 5, step: 0.1 } },
    visits: { control: { type: 'number', min: 0 } },
    userRating: { control: { type: 'number', min: 0, max: 5, step: 1 } },
    isActive: { control: 'boolean' },
    labels: {
      control: 'object',
    },
    'onView-details': { action: 'view-details' },
    onRate: { action: 'rate' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Eiffel Tower',
    rating: 4.7,
    visits: 12345,
    userRating: 0,
    isActive: false,
    labels: {
      visits: 'visits',
      yourRating: 'Your rating',
    },
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    isActive: true,
  },
};

export const WithUserRating: Story = {
  args: {
    ...Default.args,
    userRating: 4,
  },
};

export const LowRating: Story = {
  args: {
    ...Default.args,
    rating: 2.3,
  },
};