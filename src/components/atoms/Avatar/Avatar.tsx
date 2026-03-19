import type { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string
  alt: string
  size?: AvatarSize
  initials?: string
}

const Avatar = ({
  src,
  alt,
  size = 'md',
  initials,
  className,
  ...rest
}: AvatarProps) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={[styles.avatar, styles[size], className ?? ''].join(' ')}
        {...rest}
      />
    )
  }

  return (
    <span
      role="img"
      aria-label={alt}
      className={[styles.avatar, styles.fallback, styles[size], className ?? ''].join(' ')}
    >
      {initials ?? alt.charAt(0).toUpperCase()}
    </span>
  )
}

export default Avatar