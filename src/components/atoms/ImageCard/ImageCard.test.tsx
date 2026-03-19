import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ImageCard from './ImageCard'

describe('ImageCard', () => {
  it('renders image when not loading', () => {
    render(<ImageCard src="https://example.com/photo.jpg" alt="Nature" />)
    expect(screen.getByRole('img', { name: 'Nature' })).toBeInTheDocument()
  })

  it('renders skeleton when isLoading is true', () => {
    render(<ImageCard src="https://example.com/photo.jpg" alt="Nature" isLoading />)
    expect(screen.getByRole('status', { name: 'Loading image' })).toBeInTheDocument()
  })

  it('does not render image when isLoading is true', () => {
    render(<ImageCard src="https://example.com/photo.jpg" alt="Nature" isLoading />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('applies correct ratio class', () => {
    render(<ImageCard src="https://example.com/photo.jpg" alt="Nature" ratio="16:9" />)
    const wrapper = screen.getByRole('img').parentElement
    expect(wrapper?.className).toContain('ratio_16_9')
  })

  it('applies default ratio 3:4', () => {
    render(<ImageCard src="https://example.com/photo.jpg" alt="Nature" />)
    const wrapper = screen.getByRole('img').parentElement
    expect(wrapper?.className).toContain('ratio_3_4')
  })
})