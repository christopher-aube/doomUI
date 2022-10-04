import React from 'react';
import { ColorBlockProps } from '../page-palette.types';
import { ColorBlock } from './palette-color-block';

export const ColorSection = ({ color }: ColorBlockProps) => {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  return (
    <div className='dui__color-section'>
      <h2 className='dui__color-section__label'>{color}</h2>
      <div className='dui__color-section__blocks'>
        {shades.map((shade: number, idx: number) => {
          const colorShade = `dui__${color}--${shade}`;

          return <ColorBlock color={colorShade} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default {
  ColorSection,
};
