import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Badge from './Badge'

describe('Badge', () => {
  it('renders label correctly', () => {
    render(<Badge label="Nature" />)
    expect(screen.getByText('Nature')).toBeInTheDocument()
  })

  it('renders as span element', () => {
    render(<Badge label="Nature" />)
    expect(screen.getByText('Nature').tagName).toBe('SPAN')
  })

  it('applies correct variant class', () => {
    render(<Badge label="Nature" variant="success" />)
    expect(screen.getByText('Nature').className).toContain('success')
  })

  it('applies correct size class', () => {
    render(<Badge label="Nature" size="sm" />)
    expect(screen.getByText('Nature').className).toContain('sm')
  })

  it('applies default variant primary', () => {
    render(<Badge label="Nature" />)
    expect(screen.getByText('Nature').className).toContain('primary')
  })

  it('applies default size md', () => {
    render(<Badge label="Nature" />)
    expect(screen.getByText('Nature').className).toContain('md')
  })
})