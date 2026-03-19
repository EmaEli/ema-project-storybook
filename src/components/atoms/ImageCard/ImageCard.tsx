import type { ImgHTMLAttributes } from 'react'
import styles from './ImageCard.module.css'

type ImageCardRatio = '1:1' | '4:3' | '16:9' | '3:4'

interface ImageCardProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  ratio?: ImageCardRatio
  isLoading?: boolean
  width?: number | string
  height?: number | string
}

const ratioMap: Record<ImageCardRatio, string> = {
  '1:1': 'ratio_1_1',
  '4:3': 'ratio_4_3',
  '16:9': 'ratio_16_9',
  '3:4': 'ratio_3_4',
}

const ImageCard = ({
  src,
  alt,
  ratio = '3:4',
  isLoading = false,
  width,
  height,
  className,
  ...rest
}: ImageCardProps) => {
  return (
    <div
      className={[styles.wrapper, styles[ratioMap[ratio]], className ?? ''].join(' ')}
      style={{ width, height }}
    >
      {isLoading ? (
        <div className={styles.skeleton} role="status" aria-label="Loading image" />
      ) : (
        <img
          src={src}
          alt={alt}
          className={styles.image}
          {...rest}
        />
      )}
    </div>
  )
}

export default ImageCard