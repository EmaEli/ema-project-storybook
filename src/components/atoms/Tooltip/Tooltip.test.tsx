import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Tooltip from './Tooltip'

describe('Tooltip', () => {
  it('renders children correctly', () => {
    render(
      <Tooltip content="Hello">
        <button>Hover me</button>
      </Tooltip>
    )
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('renders tooltip content', () => {
    render(
      <Tooltip content="Hello">
        <button>Hover me</button>
      </Tooltip>
    )
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
    expect(screen.getByRole('tooltip')).toHaveTextContent('Hello')
  })

  it('applies correct position class', () => {
    render(
      <Tooltip content="Hello" position="bottom">
        <button>Hover me</button>
      </Tooltip>
    )
    expect(screen.getByRole('tooltip').className).toContain('bottom')
  })

  it('applies default position top', () => {
    render(
      <Tooltip content="Hello">
        <button>Hover me</button>
      </Tooltip>
    )
    expect(screen.getByRole('tooltip').className).toContain('top')
  })
})