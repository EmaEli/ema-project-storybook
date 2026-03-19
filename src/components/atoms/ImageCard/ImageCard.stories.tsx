import type { Meta, StoryObj } from '@storybook/react-vite'
import ImageCard from './ImageCard'

const meta: Meta<typeof ImageCard> = {
  title: 'Atoms/ImageCard',
  component: ImageCard,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'select',
      options: ['1:1', '4:3', '16:9', '3:4'],
    },
    isLoading: { control: 'boolean' },
    width: { control: 'number' },
    height: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof ImageCard>

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/400/600',
    alt: 'Moodboard image',
    ratio: '16:9',
  },
}

export const Landscape: Story = {
  args: {
    src: 'https://picsum.photos/800/600',
    alt: 'Landscape image',
    ratio: '16:9',
  },
}

export const Square: Story = {
  args: {
    src: 'https://picsum.photos/400/400',
    alt: 'Square image',
    ratio: '1:1',
  },
}

export const Loading: Story = {
  args: {
    src: 'https://picsum.photos/400/600',
    alt: 'Loading image',
    isLoading: true,
    ratio: '3:4',
  },
}

export const CustomSize: Story = {
  args: {
    src: 'https://picsum.photos/400/600',
    alt: 'Custom size image',
    ratio: '3:4',
    width: 200,
    height: 300,
  },
}

export const AllRatios: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ width: '200px' }}>
        <ImageCard src="https://picsum.photos/400/400" alt="1:1" ratio="1:1" />
      </div>
      <div style={{ width: '200px' }}>
        <ImageCard src="https://picsum.photos/400/300" alt="4:3" ratio="4:3" />
      </div>
      <div style={{ width: '200px' }}>
        <ImageCard src="https://picsum.photos/800/450" alt="16:9" ratio="16:9" />
      </div>
      <div style={{ width: '200px' }}>
        <ImageCard src="https://picsum.photos/300/400" alt="3:4" ratio="3:4" />
      </div>
    </div>
  ),
}