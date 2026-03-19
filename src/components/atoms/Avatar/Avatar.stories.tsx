import type { Meta, StoryObj } from '@storybook/react-vite'
import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150',
    alt: 'John Doe',
    size: 'md',
  },
}

export const WithInitials: Story = {
  args: {
    alt: 'John Doe',
    initials: 'JD',
    size: 'md',
  },
}

export const WithFirstLetter: Story = {
  args: {
    alt: 'John Doe',
    size: 'md',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar alt="John Doe" initials="JD" size="sm" />
      <Avatar alt="John Doe" initials="JD" size="md" />
      <Avatar alt="John Doe" initials="JD" size="lg" />
      <Avatar alt="John Doe" initials="JD" size="xl" />
    </div>
  ),
}