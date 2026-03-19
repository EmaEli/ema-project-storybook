import type { LucideIcon } from 'lucide-react'
import styles from './Icon.module.css'

type IconSize = 'sm' | 'md' | 'lg'
type IconColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'neutral'

interface IconProps {
  icon: LucideIcon
  size?: IconSize
  color?: IconColor
  className?: string
  label?: string
}

const sizeMap: Record<IconSize, number> = {
  sm: 16,
  md: 24,
  lg: 32,
}

const Icon = ({
  icon: LucideIconComponent,
  size = 'md',
  color = 'neutral',
  className,
  label,
}: IconProps) => {
  return (
    <span
      className={[styles.wrapper, styles[color], className ?? ''].join(' ')}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={!label}
    >
      <LucideIconComponent size={sizeMap[size]} strokeWidth={1.5} />
    </span>
  )
}

export default Icon