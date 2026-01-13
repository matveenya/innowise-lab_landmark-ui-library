import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../components/Button.vue';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    buttonText: { control: 'text' },
    loadingText: { control: 'text' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonText: 'Submit',
    loadingText: 'Loading...',
    loading: false,
    disabled: false,
  },
};

export const Loading: Story = {
  args: {
    buttonText: 'Submit',
    loadingText: 'Submitting...',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    buttonText: 'Submit',
    disabled: true,
  },
};