import type { Meta, StoryObj } from '@storybook/react-vite'
import Typography from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'subtitle-h2', 'subtitle-h3',
        'body-large-bold', 'body-large', 'body-large-light',
        'body-bold', 'body', 'body-light',
        'body-small-bold', 'body-small', 'body-small-light',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const H1: Story = {
  args: { variant: 'h1', children: 'Heading H1' },
}

export const H2: Story = {
  args: { variant: 'h2', children: 'Heading H2' },
}

export const H3: Story = {
  args: { variant: 'h3', children: 'Heading H3' },
}

export const SubtitleH2: Story = {
  args: { variant: 'subtitle-h2', children: 'Subtitle H2' },
}

export const BodyLargeBold: Story = {
  args: { variant: 'body-large-bold', children: 'Body Large Bold' },
}

export const Body: Story = {
  args: { variant: 'body', children: 'Body regular text' },
}

export const BodySmall: Story = {
  args: { variant: 'body-small', children: 'Body small text' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h1">Heading H1</Typography>
      <Typography variant="h2">Heading H2</Typography>
      <Typography variant="h3">Heading H3</Typography>
      <Typography variant="h4">Heading H4</Typography>
      <Typography variant="h5">Heading H5</Typography>
      <Typography variant="h6">Heading H6</Typography>
      <Typography variant="subtitle-h2">Subtitle H2</Typography>
      <Typography variant="subtitle-h3">Subtitle H3</Typography>
      <Typography variant="body-large-bold">Body Large Bold</Typography>
      <Typography variant="body-large">Body Large</Typography>
      <Typography variant="body-large-light">Body Large Light</Typography>
      <Typography variant="body-bold">Body Bold</Typography>
      <Typography variant="body">Body</Typography>
      <Typography variant="body-light">Body Light</Typography>
      <Typography variant="body-small-bold">Body Small Bold</Typography>
      <Typography variant="body-small">Body Small</Typography>
      <Typography variant="body-small-light">Body Small Light</Typography>
    </div>
  ),
}