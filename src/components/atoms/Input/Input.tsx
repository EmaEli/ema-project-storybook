import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

type InputSize = 'sm' | 'md' | 'lg'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  inputSize?: InputSize
  fullWidth?: boolean
}

const Input = ({
  label,
  error,
  hint,
  inputSize = 'md',
  fullWidth = false,
  id,
  className,
  ...rest
}: InputProps) => {
  return (
    <div className={[styles.wrapper, fullWidth ? styles.fullWidth : ''].join(' ')}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={[
          styles.input,
          styles[inputSize],
          error ? styles.hasError : '',
          className ?? '',
        ].join(' ')}
        {...rest}
      />
      {error && <span className={styles.error}>{error}</span>}
      {hint && !error && <span className={styles.hint}>{hint}</span>}
    </div>
  )
}

export default Input