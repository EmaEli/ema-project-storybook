import type { HTMLAttributes } from 'react'
import styles from './Badge.module.css'

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'neutral'
type BadgeSize = 'sm' | 'md'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  label: string
}

const Badge = ({
  variant = 'primary',
  size = 'md',
  label,
  className,
  ...rest
}: BadgeProps) => {
  return (
    <span
      className={[
        styles.badge,
        styles[variant],
        styles[size],
        className ?? '',
      ].join(' ')}
      {...rest}
    >
      {label}
    </span>
  )
}

export default Badge