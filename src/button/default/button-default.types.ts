import React from 'react';

export interface ButtonProps extends Omit<React.AllHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: "button" | "submit" | "reset";
}