import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Input from './Input'

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Type here" />)
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<Input label="Email" id="email" />)
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('associates label with input via id', () => {
    render(<Input label="Email" id="email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders error message when provided', () => {
    render(<Input error="Field required" />)
    expect(screen.getByText('Field required')).toBeInTheDocument()
  })

  it('renders hint when provided and no error', () => {
    render(<Input hint="Max 100 characters" />)
    expect(screen.getByText('Max 100 characters')).toBeInTheDocument()
  })

  it('does not render hint when error is present', () => {
    render(<Input hint="Max 100 characters" error="Field required" />)
    expect(screen.queryByText('Max 100 characters')).not.toBeInTheDocument()
  })

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('calls onChange when typing', () => {
    const handleChange = vi.fn()
    render(<Input onChange={handleChange} />)
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hello' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})