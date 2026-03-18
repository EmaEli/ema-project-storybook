import type { ElementType, HTMLAttributes } from 'react'
import styles from './Typography.module.css'

type TypographyVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'subtitle-h2' | 'subtitle-h3'
  | 'body-large-bold' | 'body-large' | 'body-large-light'
  | 'body-bold' | 'body' | 'body-light'
  | 'body-small-bold' | 'body-small' | 'body-small-light'

const variantTagMap: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'subtitle-h2': 'h2',
  'subtitle-h3': 'h3',
  'body-large-bold': 'p',
  'body-large': 'p',
  'body-large-light': 'p',
  'body-bold': 'p',
  'body': 'p',
  'body-light': 'p',
  'body-small-bold': 'p',
  'body-small': 'p',
  'body-small-light': 'p',
}

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  as?: ElementType
}

const Typography = ({
  variant = 'body',
  as,
  children,
  className,
  ...rest
}: TypographyProps) => {
  const Tag = as ?? variantTagMap[variant]

  return (
    <Tag
      className={[styles[variant.replace(/-/g, '_')], className ?? ''].join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Typography