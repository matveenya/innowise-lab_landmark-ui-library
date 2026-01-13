import type { Meta, StoryObj } from '@storybook/vue3';

import Input from '../components/Input.vue';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    id: { control: 'text' },
    label: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
    },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    errorMessage: { control: 'text' },
    containerClass: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: '',
    id: 'input-default',
    label: 'Label',
    type: 'text',
    placeholder: 'Enter text',
    required: false,
  },
};

export const WithError: Story = {
  args: {
    modelValue: 'Invalid value',
    id: 'input-error',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email',
    errorMessage: 'This field is required',
    required: true,
  },
};

export const Password: Story = {
  args: {
    modelValue: '',
    id: 'input-password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    required: true,
  },
};