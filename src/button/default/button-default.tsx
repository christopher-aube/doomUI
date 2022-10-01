import React from "react";
import { ButtonProps } from './button-default.types';

export const Button = ({ children, ...props }: ButtonProps) => {

  return <button {...props}>{children}</button>;
};

export default Button;