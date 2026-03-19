import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Tooltip.module.css'

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  content: string
  position?: TooltipPosition
  children: ReactNode
}

const Tooltip = ({
  content,
  position = 'top',
  children,
  className,
  ...rest
}: TooltipProps) => {
  return (
    <div className={[styles.wrapper, className ?? ''].join(' ')} {...rest}>
      {children}
      <span
        role="tooltip"
        className={[styles.tooltip, styles[position]].join(' ')}
      >
        {content}
      </span>
    </div>
  )
}

export default Tooltip