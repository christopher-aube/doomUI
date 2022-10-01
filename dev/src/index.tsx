import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme, Button } from '../../src';
import './index.css';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

const App = () => {
  const [theme, setTheme] = useState<Theme.Themes>('light');

  const handlerTheme = () => {
    const themeToggle = theme === 'light' ? 'dark' : 'light';

    setTheme(themeToggle);
  };

  return (
    <Theme.Provider theme={theme}>
      <Button className="theme-btn" onClick={handlerTheme}>Toggle Theme: {theme}</Button>
    </Theme.Provider>
  );
}

root.render(<App />);