import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heart, Search, Bookmark, Plus, Trash, Edit, X, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Icon from './Icon'

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Search,
  Bookmark,
  Plus,
  Trash,
  Edit,
  X,
  Check,
}

interface IconStoryArgs {
  iconName: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'neutral'
  label?: string
}

const meta: Meta<IconStoryArgs> = {
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'select',
      options: Object.keys(iconMap),
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'neutral'],
    },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<IconStoryArgs>

export const Default: Story = {
  args: {
    iconName: 'Heart',
    size: 'md',
    color: 'neutral',
    label: 'Heart',
  },
  render: ({ iconName, ...args }) => {
    const SelectedIcon = iconMap[iconName] ?? Heart
    return <Icon icon={SelectedIcon} {...args} />
  },
}

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Icon icon={Heart} label="Heart" color="error" />
      <Icon icon={Search} label="Search" color="primary" />
      <Icon icon={Bookmark} label="Bookmark" color="secondary" />
      <Icon icon={Plus} label="Plus" color="success" />
      <Icon icon={Trash} label="Trash" color="warning" />
      <Icon icon={Edit} label="Edit" color="neutral" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon icon={Heart} size="sm" label="Small" color="primary" />
      <Icon icon={Heart} size="md" label="Medium" color="primary" />
      <Icon icon={Heart} size="lg" label="Large" color="primary" />
    </div>
  ),
}