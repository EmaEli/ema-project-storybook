import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('renders correctly', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has default aria-label', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading...')
  })

  it('applies custom aria-label', () => {
    render(<Spinner label="Please wait" />)
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Please wait')
  })

  it('applies correct size class', () => {
    render(<Spinner size="lg" />)
    expect(screen.getByRole('status').className).toContain('lg')
  })

  it('applies correct color class', () => {
    render(<Spinner color="secondary" />)
    expect(screen.getByRole('status').className).toContain('secondary')
  })

  it('applies default size md', () => {
    render(<Spinner />)
    expect(screen.getByRole('status').className).toContain('md')
  })

  it('applies default color primary', () => {
    render(<Spinner />)
    expect(screen.getByRole('status').className).toContain('primary')
  })
})