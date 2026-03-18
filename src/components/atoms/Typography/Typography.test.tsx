import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Typography from './Typography'

describe('Typography', () => {
  it('renders children correctly', () => {
    render(<Typography>Hello</Typography>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('renders h1 tag when variant is h1', () => {
    render(<Typography variant="h1">Title</Typography>)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders h2 tag when variant is h2', () => {
    render(<Typography variant="h2">Title</Typography>)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders p tag when variant is body', () => {
    render(<Typography variant="body">Text</Typography>)
    expect(screen.getByText('Text').tagName).toBe('P')
  })

  it('overrides tag with as prop', () => {
    render(<Typography variant="h1" as="span">Title</Typography>)
    expect(screen.getByText('Title').tagName).toBe('SPAN')
  })

  it('applies correct class for variant', () => {
    render(<Typography variant="body-bold">Text</Typography>)
    expect(screen.getByText('Text').className).toContain('body_bold')
  })
})