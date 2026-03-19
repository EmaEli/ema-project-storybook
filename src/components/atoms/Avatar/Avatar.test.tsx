import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Avatar from './Avatar'

describe('Avatar', () => {
  it('renders image when src is provided', () => {
    render(<Avatar src="https://example.com/photo.jpg" alt="John Doe" />)
    expect(screen.getByRole('img', { name: 'John Doe' })).toBeInTheDocument()
  })

  it('renders initials when src is not provided', () => {
    render(<Avatar alt="John Doe" initials="JD" />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('renders first letter of alt when no src and no initials', () => {
    render(<Avatar alt="John Doe" />)
    expect(screen.getByText('J')).toBeInTheDocument()
  })

  it('applies correct size class', () => {
    render(<Avatar alt="John Doe" size="lg" />)
    expect(screen.getByRole('img', { name: 'John Doe' }).className).toContain('lg')
  })

  it('applies fallback class when no src', () => {
    render(<Avatar alt="John Doe" />)
    expect(screen.getByRole('img', { name: 'John Doe' }).className).toContain('fallback')
  })

  it('applies default size md', () => {
    render(<Avatar alt="John Doe" />)
    expect(screen.getByRole('img', { name: 'John Doe' }).className).toContain('md')
  })
})