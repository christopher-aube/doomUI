import * as React from 'react';

export type ButtonCommons = {
  children: React.ReactChildren
};

export type ButtonProps = Partial<ButtonCommons> & React.ButtonHTMLAttributes<HTMLButtonElement>