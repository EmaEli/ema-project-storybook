import type { HTMLAttributes } from 'react'
import styles from './Spinner.module.css'

type SpinnerSize = 'sm' | 'md' | 'lg'
type SpinnerColor = 'primary' | 'secondary' | 'neutral'

interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize
  color?: SpinnerColor
  label?: string
}

const Spinner = ({
  size = 'md',
  color = 'primary',
  label = 'Loading...',
  className,
  ...rest
}: SpinnerProps) => {
  return (
    <span
      role="status"
      aria-label={label}
      className={[styles.spinner, styles[size], styles[color], className ?? ''].join(' ')}
      {...rest}
    />
  )
}

export default Spinner