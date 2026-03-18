import type { Meta, StoryObj } from '@storybook/react-vite'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: { label: 'Nature', variant: 'primary' },
}

export const Secondary: Story = {
  args: { label: 'Nature', variant: 'secondary' },
}

export const Success: Story = {
  args: { label: 'Nature', variant: 'success' },
}

export const Error: Story = {
  args: { label: 'Nature', variant: 'error' },
}

export const Warning: Story = {
  args: { label: 'Nature', variant: 'warning' },
}

export const Neutral: Story = {
  args: { label: 'Nature', variant: 'neutral' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge label="Primary" variant="primary" />
      <Badge label="Secondary" variant="secondary" />
      <Badge label="Success" variant="success" />
      <Badge label="Error" variant="error" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Neutral" variant="neutral" />
    </div>
  ),
}