import type { Meta, StoryObj } from '@storybook/react-vite'
import Input from './Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Type here...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email',
    id: 'email',
    placeholder: 'Enter your email',
  },
}

export const WithHint: Story = {
  args: {
    label: 'Username',
    id: 'username',
    hint: 'Max 100 characters',
    placeholder: 'Enter your username',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    id: 'email',
    error: 'This field is required',
    placeholder: 'Enter your email',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    id: 'email',
    placeholder: 'Enter your email',
    disabled: true,
  },
}

export const Small: Story = {
  args: {
    inputSize: 'sm',
    placeholder: 'Small input',
  },
}

export const Large: Story = {
  args: {
    inputSize: 'lg',
    placeholder: 'Large input',
  },
}

export const FullWidth: Story = {
  args: {
    label: 'Full width input',
    id: 'fullwidth',
    placeholder: 'Type here...',
    fullWidth: true,
  },
}