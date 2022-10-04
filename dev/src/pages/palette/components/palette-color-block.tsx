import React from 'react';
import { ColorBlockProps } from '../page-palette.types';
import { Capitialize } from '../../../filters';

export const ColorBlock = ({ color }: ColorBlockProps) => {
  const classes = `dui__color-block__display ${color}`;
  const label = color.replace('dui', '').replace('__', '').replace('--', ' ').trim();

  return (
    <div className='dui__color-block'>
      <div className={classes}></div>
      <div className='dui__color-block__label'>
        <Capitialize value={label} />
      </div>
    </div>
  );
};

export default {
  ColorBlock,
};
