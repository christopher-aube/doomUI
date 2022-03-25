import * as React from 'react'
import { ButtonProps } from './types'

export const baseClass = 'doomui-button'

export const Button = (props: ButtonProps) => {
  const { children, className } = props

  return (
    <button
      className={
        [
          baseClass,
          className
        ]
        .join(' ')
        .trim()
      }
    >
      {children}
    </button>
  )
};

export default {
  Button
}
