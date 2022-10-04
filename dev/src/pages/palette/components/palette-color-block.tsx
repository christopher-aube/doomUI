import React from 'react';
import { ColorBlockProps } from '../page-palette.types';
import { Capitialize } from '../../../filters';

export const ColorBlock = ({ color }: ColorBlockProps) => {
  const classes = `color-block__display ${color}`;
  const label = color.replace('--', ' ');

  return (
    <div className='color-block'>
      <div className={classes}></div>
      <div className='color-block__label'>
        <Capitialize value={label} />
      </div>
    </div>
  );
};

export default {
  ColorBlock,
};
