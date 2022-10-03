import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme, Button } from '../../src';
import './_index.scss';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

export type ColorBlockProps = {
  color: string;
};

const ColorBlock = ({ color }: ColorBlockProps) => {
  const classes = `color-block__display ${color}`;

  return (
    <div className='color-block'>
      <div className={classes}></div>
      <div className='color-block__label'>{color.replace('--', ' ')}</div>
    </div>
  );
};

const ColorSection = ({ color }: ColorBlockProps) => {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  return (
    <div className='color-section'>
      <h2 className='color-section__label'>{color}</h2>
      <div className='color-section__blocks'>
        {shades.map((shade: number, idx: number) => {
          const colorShade = `${color}--${shade}`;

          return <ColorBlock color={colorShade} key={idx} />;
        })}
      </div>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState<Theme.Themes>('light');
  const colors = ['grey', 'green', 'yellow', 'orange', 'red', 'rose', 'pink', 'purple', 'indigo', 'blue', 'cyan', 'teal'];

  const handlerTheme = () => {
    const themeToggle = theme === 'light' ? 'dark' : 'light';

    setTheme(themeToggle);
  };

  return (
    <Theme.Provider theme={theme}>
      <Button className="theme-btn text-lg" onClick={handlerTheme}>Toggle Theme: {theme}</Button>
      {colors.map((color: string, idx: number) => {
        return <ColorSection color={color} key={idx} />;
      })}
    </Theme.Provider>
  );
}

root.render(<App />);