import React from 'react';
import { ColorSection } from './components';

export const Path = '/palette';

export const Page = () => {
  const colors = ['grey', 'green', 'yellow', 'orange', 'red', 'rose', 'pink', 'purple', 'indigo', 'blue', 'cyan', 'teal'];

  return (
    <>
      {colors.map((color: string, idx: number) => {
        return <ColorSection color={color} key={idx} />;
      })}
    </>
  );
}

export default {
  Path,
  Page,
};
