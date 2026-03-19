import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Heart } from 'lucide-react'
import Icon from './Icon'

describe('Icon', () => {
  it('renders correctly', () => {
    render(<Icon icon={Heart} label="Heart" />)
    expect(screen.getByRole('img', { name: 'Heart' })).toBeInTheDocument()
  })

it('applies aria-hidden when no label is provided', () => {
  render(<Icon icon={Heart} />)
  const span = document.querySelector('span')
  expect(span).toHaveAttribute('aria-hidden', 'true')
})

  it('applies correct color class', () => {
    render(<Icon icon={Heart} color="success" label="Heart" />)
    expect(screen.getByRole('img', { name: 'Heart' }).className).toContain('success')
  })

  it('applies correct size', () => {
    render(<Icon icon={Heart} size="lg" label="Heart" />)
    const svg = screen.getByRole('img', { name: 'Heart' }).querySelector('svg')
    expect(svg).toHaveAttribute('width', '32')
  })
})