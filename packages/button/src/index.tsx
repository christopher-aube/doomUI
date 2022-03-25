import * as React from 'react'
import { ButtonProps } from './types'
import * as styleMod from './styles.module.scss'

export const baseClass:string = 'doomuiButton'

export const Button = (props: ButtonProps) => {
  const { children, className } = props

  return (
    <button
      className={
        [
          styleMod[baseClass],
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
