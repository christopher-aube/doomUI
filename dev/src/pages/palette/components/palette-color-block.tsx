import React from 'react';
import { ColorBlockProps } from '../page-palette.types';

export const ColorBlock = ({ color }: ColorBlockProps) => {
  const classes = `color-block__display ${color}`;

  return (
    <div className='color-block'>
      <div className={classes}></div>
      <div className='color-block__label'>{color.replace('--', ' ')}</div>
    </div>
  );
};

export default {
  ColorBlock,
};
