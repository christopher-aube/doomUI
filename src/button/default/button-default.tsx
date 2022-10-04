import React from "react";
import { ButtonProps } from './button-default.types';
import * as styles from './_index.scss';

export const Button = ({ children, apperance, variant, className, ...props }: ButtonProps) => {
  let classes = styles.button;

  if (className) {
    classes += ` ${className}`
  }

  if (apperance) {
    const appearanceStyle = styles[`buttonAppearance${apperance}`];

    classes += ` ${appearanceStyle}`;
  }

  if (variant) {
    const variantStyle = styles[`button${variant}`];

    classes += ` ${variantStyle}`;
  }

  return <button className={classes} {...props}>{children}</button>;
};

export default Button;